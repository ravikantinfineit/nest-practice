import * as _ from 'lodash';

/**
 * @fileoverview
 * This file defines the `Query` class, which provides methods for generating SQL queries
 * related to city data management.
 *
 * @module
 * @description
 * The `Query` class includes methods to generate SQL queries for operations such as
 * retrieving, inserting, updating, and deleting city records from the database.
 * It uses the lodash library for object manipulation and query construction.
 */
export class Query {
    /**
     * Generates a SQL query to find a city by its ID.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    findById(): object {
        return {
            name: `findById`,
            type: `SELECT_ONE`,
            syntax: (where: any) => {
                const allowedKeys = ['id_city', 'name', 'id_state', 'id_country', 'status'];
                const id = _.get(where, 'id');
                const sql = `SELECT ${allowedKeys.join(', ')} FROM city_mas WHERE status = 1 AND id_city = '${id}';`;
                console.log('find by id query--' + sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to find a city by its name.
     * @param {string} [id] - Optional ID to exclude from the search if provided.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    findByName(): object {
        return {
            name: `findByName`,
            type: `SELECT_ONE`,
            syntax: (where: any) => {
                const allowedKeys = ['id_city', 'name'];
                const name = _.get(where, 'name');
                const sql = `SELECT ${allowedKeys.join(', ')} FROM city_mas WHERE status = 1 AND name = '${name}';`;
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to insert a new city.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    insert(): object {
        return {
            name: `insert`,
            type: `INSERT`,
            syntax: (where: any) => {
                const allowedKeys = ['name', 'id_state', 'id_country', 'status'];
                const conds = _.pick(where, allowedKeys);
                const keys = _.keys(conds);
                const sql = `INSERT INTO city_mas (${keys.join(', ')}) VALUES (${keys.map((key) => this.formatValue(conds[key])).join(', ')}) RETURNING id_city as insertid, name;`;
                console.log('Insert Query-- ' + sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to update an existing city.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    update(): object {
        return {
            name: `update`,
            type: `UPDATE`,
            syntax: (where: any) => {
                let sql = `UPDATE city_mas SET `;
                const id = _.get(where, 'id_city');
                _.unset(where, 'id_city');
                const allowedKeys = ['name', 'id_state', 'status'];
                where = _.pick(where, allowedKeys);

                const lastKey = Object.keys(where)[Object.keys(where).length - 1];
                _.mapKeys(where, (value, key) => {
                    sql += `${key} = ${this.formatValue(value)}`;
                    sql += lastKey == key ? `` : `, `;
                });
                sql += ` WHERE status = 1 AND id_city = '${id}' RETURNING id_city as updatedid, name;`;
                console.log('Update Query-- ' + sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to delete a city by its ID.
     * @param {string} id - The ID of the city to delete.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    delete(): object {
        return {
            name: `delete`,
            type: `UPDATE`,
            syntax: (id: string) => {
                const sql = `UPDATE city_mas SET status = 127 WHERE status = 1 AND id_city = '${id}' RETURNING id_city as deletedid, name;`;
                return sql;
            },
        };
    }

    /**
     * Formats a value for use in an SQL query.
     * @param value - Value to format
     * @returns - Formatted value as a string
     */

    formatValue(value: any): string {
        if (Array.isArray(value)) {
            const formattedArray = value.map((v) => `${v.replace(/'/g, "''")}`).join(', ');
            return `'{${formattedArray}}'`;
        } else if (typeof value === 'string') {
            return `'${value.replace(/'/g, "''")}'`;
        } else if (value === null || value === undefined) {
            return 'NULL';
        } else {
            return `${value}`; // For numbers and other types
        }
    }
}
