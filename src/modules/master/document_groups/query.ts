import * as _ from 'lodash';

/**
 * @fileoverview
 * This file defines the `Query` class, which provides methods for generating SQL queries
 * related to document group data management.
 *
 * @module
 * @description
 * The `Query` class includes methods to generate SQL queries for operations such as
 * retrieving, inserting, updating, and deleting document group records from the database.
 * It uses the lodash library for object manipulation and query construction.
 */
export class Query {
    /**
     * Generates a SQL query to find a document group by its ID.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    findById(): object {
        return {
            name: `findById`,
            type: `SELECT_ONE`,
            syntax: (where: any) => {
                const allowedKeys = ['id_document_group', 'name', 'status'];
                const id = _.get(where, 'id');
                const sql = `SELECT ${allowedKeys.join(', ')} FROM document_groups WHERE status = 1 AND id_document_group = '${id}';`;
                console.log('FindById query: ' + sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to find a document group by its name.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    findByName(): object {
        return {
            name: `findByName`,
            type: `SELECT_ONE`,
            syntax: (where: any) => {
                const allowedKeys = ['id_document_group', 'name'];
                const name = _.get(where, 'name');
                const sql = `SELECT ${allowedKeys.join(', ')} FROM document_groups WHERE status = 1 AND name = '${name}';`;
                console.log('FindByName query: ' + sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to insert a new document group.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    insert(): object {
        return {
            name: `insert`,
            type: `INSERT`,
            syntax: (where: any) => {
                const allowedKeys = ['name', 'status'];
                const conds = _.pick(where, allowedKeys);
                const keys = _.keys(conds);
                const values = keys.map((key) => this.formatValue(conds[key]));

                const sql = `INSERT INTO document_groups (${keys.join(', ')}) VALUES (${values.join(', ')}) RETURNING id_document_group as insertid, name;`;
                console.log('Insert query: ', sql);

                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to update an existing document group.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    update(): object {
        return {
            name: `update`,
            type: `UPDATE`,
            syntax: (where: any) => {
                const id = _.get(where, 'id_document_group');
                _.unset(where, 'id_document_group');
                const allowedKeys = ['name', 'status', 'updated_at'];
                const updateData = _.pick(where, allowedKeys);

                const setClauses = Object.keys(updateData).map(
                    (key) => `${key} = ${this.formatValue(updateData[key])}`
                );
                const sql = `UPDATE document_groups SET ${setClauses.join(', ')} WHERE id_document_group = '${id}' AND status = 1 RETURNING id_document_group as updatedid, name;`;
                console.log('Update query: ', sql);

                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to delete a document group by its ID.
     * @param {string} id - The ID of the document group to delete.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    delete(): object {
        return {
            name: `delete`,
            type: `UPDATE`,
            syntax: (id: string) => {
                const sql = `UPDATE document_groups SET status = 127 WHERE id_document_group = '${id}' RETURNING id_document_group as deletedid, name;`;
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
