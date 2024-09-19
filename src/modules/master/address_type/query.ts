import * as _ from 'lodash';

/**
 * @fileoverview
 * This file defines the `Query` class, which provides methods for generating SQL queries
 * related to address type data management.
 *
 * @module
 * @description
 * The `Query` class includes methods to generate SQL queries for operations such as
 * retrieving, inserting, updating, and deleting address type records from the database.
 * It uses the lodash library for object manipulation and query construction.
 */
export class Query {
    /**
     * Generates a SQL query to find a address_type by its ID.
     * @returns {object} The query configuration object with `name`, `type`, `syntax`, and `params` properties.
     */

    findById(): object {
        return {
            name: `findbyid`,
            type: `SELECT_ONE`,
            syntax: (where: any) => {
                const allowedKeys = ['id_address_type', 'address_type', 'status'];
                const id = _.get(where, 'id');
                const sql = `SELECT ${allowedKeys.join(', ')} FROM address_types WHERE id_address_type = '${id}';`;
                console.log('FindById query: ' + sql);
                return sql;
            },
        };
    }
    /**
     * Generates a SQL query to find a address_type  by its address_type.
     * @returns {object} The query configuration object with `name`, `type`, `syntax`, and `params` properties.
     */
    findByName(): object {
        return {
            name: `findbyname`,
            type: `SELECT_ONE`,
            syntax: (where: any) => {
                const allowedKeys = ['id_address_type', 'address_type', 'status'];
                const name = _.get(where, 'address_type');
                const sql = `SELECT ${allowedKeys.join(', ')} FROM address_types WHERE address_type='${name}';`;
                console.log('FindByNmae query: ' + sql);
                return sql;
            },
        };
    }
    /**
     * Generates a SQL query to insert a new addres_type.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    insert(): object {
        return {
            name: `insert`,
            type: `INSERT`,
            syntax: (where: any) => {
                const allowedKeys = ['address_type', 'status'];
                const conds = _.pick(where, allowedKeys);
                const keys = _.keys(conds);
                const values = keys.map((key) => this.formatValue(conds[key]));
                const sql = `INSERT INTO address_types (${keys.join(', ')}) VALUES(${values}) RETURNING id_address_type as insertid, address_type;`;
                console.log('Insert query: ', sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to update an existing address_types.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    update(): object {
        return {
            name: `update`,
            type: `UPDATE`,
            syntax: (where: any) => {
                const id = _.get(where, 'id_address_type');
                _.unset(where, 'id_address_type');
                const allowedKeys = ['address_type', 'status'];
                const updateData = _.pick(where, allowedKeys);
                const setClauses = Object.keys(updateData).map(
                    (key) => `${key}=${this.formatValue(updateData[key])}`
                );
                const sql = `UPDATE address_types SET ${setClauses.join(', ')} WHERE id_address_type='${id}' RETURNING id_address_type as updatedid, address_type; `;
                console.log('Update query-- ' + sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to delete a address_types by its ID.
     * @param {string} id - The ID of the address_types to delete.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    delete(): object {
        return {
            name: `delete`,
            type: `DELETE`,
            syntax: (id: string) => {
                const sql = `UPDATE address_types SET status = 127 WHERE id_address_type = '${id}' RETURNING id_address_type as deletedid, address_type;`;
                console.log('Delete query: ', sql);
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
            const formattedArray = value.map((v) => `'${v.replace(/'/g, "''")}'`).join(', ');
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
