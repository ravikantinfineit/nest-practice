import * as _ from 'lodash';

/**
 * @fileoverview
 * This file defines the `Query` class, which provides methods for generating SQL queries
 * related to document data management.
 *
 * @module
 * @description
 * The `Query` class includes methods to generate SQL queries for operations such as
 * retrieving, inserting, updating, and deleting document records from the database.
 * It uses the lodash library for object manipulation and query construction, and
 * prevents SQL injection by using parameterized queries.
 */
export class Query {
    /**
     * Generates a SQL query to find a document by its ID.
     * @returns {object} The query configuration object with `name`, `type`, `syntax`, and `params` properties.
     */
    findById(): object {
        return {
            name: `findById`,
            type: `SELECT_ONE`,
            syntax: (where: any) => {
                const allowedKeys = ['id_document', 'id_document_group', 'name', 'status'];
                const id = _.get(where, 'id');
                const sql = `SELECT ${allowedKeys.join(', ')} FROM documents WHERE id_document = '${id}';`;
                console.log('FindById query: ' + sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to find a document by its name.
     * @returns {object} The query configuration object with `name`, `type`, `syntax`, and `params` properties.
     */
    findByName(): object {
        return {
            name: `findByName`,
            type: `SELECT_ONE`,
            syntax: (where: any) => {
                const allowedKeys = ['id_document', 'id_document_group', 'name'];
                const name = _.get(where, 'name');
                const sql = `SELECT ${allowedKeys.join(', ')} FROM documents WHERE name = '${name}';`;
                console.log('FindByName query: ' + sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to insert a new document.
     * @returns {object} The query configuration object with `name`, `type`, `syntax`, and `params` properties.
     */
    insert(): object {
        return {
            name: `insert`,
            type: `INSERT`,
            syntax: (where: any) => {
                const allowedKeys = ['id_document_group', 'name', 'status'];
                const conds = _.pick(where, allowedKeys);
                const keys = _.keys(conds);
                //const values = _.values(conds);
                const values = keys.map((key) => this.formatValue(conds[key]));
                const sql = `INSERT INTO documents (${keys.join(', ')}) VALUES (${values}) RETURNING id_document as insertid, name;`;
                console.log('Insert query: ', sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to update an existing document.
     * @returns {object} The query configuration object with `name`, `type`, `syntax`, and `params` properties.
     */
    update(): object {
        return {
            name: `update`,
            type: `UPDATE`,
            syntax: (where: any) => {
                const id = _.get(where, 'id_document');
                _.unset(where, 'id_document');
                const allowedKeys = ['id_document_group', 'name', 'status', 'id_updated_by'];
                const updateData = _.pick(where, allowedKeys);

                const setClauses = Object.keys(updateData).map(
                    (key) => `${key} = ${this.formatValue(updateData[key])}`
                );
                const sql = `UPDATE documents SET ${setClauses.join(', ')} WHERE id_document = '${id}' AND status = 1 RETURNING id_document as updatedid, name;`;
                console.log('Update query: ', sql);

                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to delete a document by its ID.
     * @param {string} id - The ID of the document to delete.
     * @returns {object} The query configuration object with `name`, `type`, `syntax`, and `params` properties.
     */
    delete(): object {
        return {
            name: `delete`,
            type: `UPDATE`,
            syntax: (id: string) => {
                const sql = `UPDATE documents SET status = 127 WHERE id_document = '${id}' RETURNING id_document as deletedid, name;`;
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
