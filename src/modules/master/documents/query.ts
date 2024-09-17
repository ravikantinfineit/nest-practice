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
                const id = _.get(where, 'id_document');
                const sql = `SELECT ${allowedKeys.join(', ')} FROM documents WHERE id_document = $1;`;
                return {
                    text: sql, // Parameterized query
                    values: [id], // Values to be bound to the placeholders
                };
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
                const sql = `SELECT ${allowedKeys.join(', ')} FROM documents WHERE name = $1;`;
                return {
                    text: sql,
                    values: [name],
                };
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
                const allowedKeys = ['id_document_group', 'name', 'status', 'id_created_by'];
                const conds = _.pick(where, allowedKeys);
                const keys = _.keys(conds);
                const values = _.values(conds);

                const placeholders = values.map((_, i) => `$${i + 1}`).join(', '); // Creates $1, $2, $3, ...
                const sql = `INSERT INTO documents (${keys.join(', ')}) VALUES (${placeholders}) RETURNING id_document as insertid, name;`;
                return {
                    text: sql,
                    values: values, // Values to be passed as parameters
                };
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

                const setClauses = Object.keys(updateData).map((key, i) => `${key} = $${i + 1}`);
                const values = Object.values(updateData).concat(id); // Concatenate update values with ID

                const sql = `UPDATE documents SET ${setClauses.join(', ')} WHERE id_document = $${values.length} RETURNING id_document as updatedid, name;`;
                return {
                    text: sql,
                    values: values,
                };
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
                const sql = `UPDATE documents SET status = 127 WHERE id_document = $1 RETURNING id_document as deletedid, name;`;
                return {
                    text: sql,
                    values: [id],
                };
            },
        };
    }
}
