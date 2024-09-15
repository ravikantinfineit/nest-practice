import * as _ from 'lodash';

/**
 * @fileoverview
 * This file defines the `Query` class, which provides methods for generating SQL queries
 * related to country data management.
 *
 * @module
 * @description
 * The `Query` class includes methods to generate SQL queries for operations such as
 * retrieving, inserting, updating, and deleting country records from the database.
 * It uses the lodash library for object manipulation and query construction.
 */

export class Query {
    /**
     * Generates a SQL query to find a country by its ID.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    findById(): object {
        return {
            name: `findById`,
            type: `SELECT_ONE`,
            syntax: (where: any) => {
                const allowedKeys = ['id_country', 'name', 'dial_code', 'status'];
                const id = _.get(where, 'id');
                const sql = `SELECT ${allowedKeys.join(', ')} FROM country_mas  WHERE status = 1 AND id_country = '${id}';`;
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to find a country by its name.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    findByName(): object {
        return {
            name: `findByName`,
            type: `SELECT_ONE`,
            syntax: (where: any) => {
                const allowedKeys = ['id_country', 'name', 'dial_code'];
                const name = _.get(where, 'name');
                const sql = `SELECT ${allowedKeys.join(', ')} FROM country_mas  WHERE status = 1 AND name = '${name}'`;
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to insert a new country.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    insert(): object {
        return {
            name: `insert`,
            type: `INSERT`,
            syntax: (where: any) => {
                const allowedKeys = ['name', 'dial_code', 'status'];
                const conds = _.pick(where, allowedKeys);
                const keys = _.keys(conds);
                // const values = _.values(conds);
                const sql = `INSERT INTO country_mas (${keys.join(', ')}) VALUES (${keys.map((key) => this.formatValue(conds[key])).join(', ')}) RETURNING id_country as insertid, name;`;
                console.log('QUERY', sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to update an existing country.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    update(): object {
        return {
            name: `update`,
            type: `UPDATE`,
            syntax: (where: any) => {
                let sql = `UPDATE country_mas SET `;
                const id = _.get(where, 'id');
                _.unset(where, 'id');
                const allowedKeys = ['name', 'dial_code', 'status'];
                where = _.pick(where, allowedKeys);

                const lastKey = Object.keys(where)[Object.keys(where).length - 1];
                _.mapKeys(where, (value, key) => {
                    sql += `${key} = '${value}'`;
                    sql += lastKey == key ? `` : `, `;
                });
                sql += ` WHERE status = 1 AND id_country = '${id}' RETURNING id_country as updatedid, name;`;

                console.log('QUERY', sql);

                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to delete a country by its ID.
     * @param {string} id - The ID of the country to delete.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    delete(): object {
        return {
            name: `delete`,
            type: `UPDATE`,
            syntax: (id: string) => {
                const sql = `UPDATE country_mas SET status = 127 WHERE status = 1 AND id_country = '${id}' RETURNING id_country as deletedid, name;`;
                return sql;
            },
        };
    }
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
