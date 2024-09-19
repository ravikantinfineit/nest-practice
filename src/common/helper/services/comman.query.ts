import * as _ from 'lodash';

/**
 * CommonQuery
 *
 * @description
 * A generic class to handle SQL queries for different models. It provides methods for
 * finding, inserting, updating, and deleting records using DTOs.
 */
export class CommonQuery1<T> {
    private model: string; // The name of the database table/model
    private allowedKeys: (keyof T)[]; // List of keys that can be used in queries

    /**
     * Constructor to initialize the CommonQuery class.
     * @param model - The name of the model/table for queries.
     * @param allowedKeys - The keys of the DTO that are allowed in queries.
     */
    constructor(model: string, allowedKeys: (keyof T)[]) {
        this.model = model;
        this.allowedKeys = allowedKeys;
    }

    /**
     * Generates a SQL query to find a record by ID.
     * @returns An object containing the query configuration for finding by ID.
     */
    findById(): object {
        return this.createQuery(
            'SELECT_ONE',
            (id: number) => `
            SELECT ${this.allowedKeys.join(', ')}
            FROM ${this.model} AS main
            WHERE main.status = 1 AND main.id = ${this.formatValue(id)};
        `
        );
    }

    /**
     * Generates a SQL query to insert a new record.
     * @returns An object containing the query configuration for inserting a record.
     */
    insert(): object {
        return this.createQuery('INSERT', (dto: T) => {
            const conds = _.pick(dto, this.allowedKeys);
            const keys = Object.keys(conds);
            const values = keys.map((key) => this.formatValue(conds[key]));

            return `
                INSERT INTO ${this.model} (${keys.join(', ')})
                VALUES (${values.join(', ')}) RETURNING *;
            `;
        });
    }

    /**
     * Generates a SQL query to update an existing record.
     * @returns An object containing the query configuration for updating a record.
     */
    update(): object {
        return this.createQuery('UPDATE', (dto: T) => {
            const id = _.get(dto, 'id');
            _.unset(dto, 'id'); // Remove the ID for the update
            const updateData = _.pick(dto, this.allowedKeys);

            const setClauses = Object.entries(updateData)
                .map(([key, value]) => `${key} = ${this.formatValue(value)}`)
                .join(', ');

            return `
                UPDATE ${this.model}
                SET ${setClauses}
                WHERE id = ${this.formatValue(id)} RETURNING *;
            `;
        });
    }

    /**
     * Generates a SQL query to delete a record by ID.
     * @returns An object containing the query configuration for deleting a record.
     */
    delete(): object {
        return this.createQuery(
            'UPDATE',
            (id: number) => `
            UPDATE ${this.model}
            SET status = 127
            WHERE id = ${this.formatValue(id)} RETURNING *;
        `
        );
    }

    /**
     * Finds records with dynamic joins, automatically creating aliases for each table.
     * Allows specifying fields to select from joined tables.
     * @param joins - An array of objects containing the table name, join condition, join type, and selected fields.
     * @returns An object containing the query configuration for finding with joins.
     */
    findWithDynamicJoin(
        joins: Array<{
            table: string;
            condition: string;
            type?: 'JOIN' | 'LEFT JOIN';
            selectFields?: string[]; // Fields to select from the joined table
        }>
    ): object {
        return this.createQuery('SELECT_WITH_DYNAMIC_JOIN', (id: number) => {
            const fields = this.allowedKeys.join(', ');
            const joinClauses = joins
                .map((join, index) => {
                    const alias = `table${index + 1}`; // Create an alias like table1, table2, etc.
                    const joinType = join.type ? join.type : 'JOIN'; // Default to INNER JOIN if no type is specified

                    // Select specific fields from the joined table
                    const selectFields = join.selectFields
                        ? join.selectFields.map((field) => `${alias}.${field}`).join(', ')
                        : '';
                    return `${joinType} ${join.table} AS ${alias} ON ${join.condition}${selectFields ? `, ${selectFields}` : ''}`;
                })
                .join(' ');

            return `
                SELECT ${fields}, ${joins.map((join, index) => (join.selectFields ? join.selectFields.map((field) => `table${index + 1}.${field}`).join(', ') : '')).join(', ')}
                FROM ${this.model} AS main
                ${joinClauses}
                WHERE main.status = 1 AND main.id = ${this.formatValue(id)};
            `;
        });
    }

    /**
     * Creates a query object with a specific type and syntax generator.
     * @param type - The type of query (e.g., SELECT_ONE, INSERT).
     * @param syntaxGenerator - A function that generates the SQL syntax.
     * @returns An object containing the query configuration.
     */
    private createQuery(type: string, syntaxGenerator: (arg: any) => string): object {
        return {
            name: type.toLowerCase(),
            type,
            syntax: syntaxGenerator,
        };
    }

    /**
     * Formats a value for safe SQL query insertion.
     * @param value - The value to format.
     * @returns A string representation of the formatted value.
     */
    private formatValue(value: any): string {
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
    // commonQuery = new CommonQuery<YourDtoType>('your_table', ['id', 'name', 'status']);
    // queryConfig = commonQuery.findWithDynamicJoin([
    //     {
    //         table: 'another_table',
    //         condition: 'another_table.foreign_key = main.id',
    //         type: 'LEFT JOIN',
    //         selectFields: ['field1', 'field2'], // Specify fields to select from another_table
    //     },
    //     {
    //         table: 'yet_another_table',
    //         condition: 'yet_another_table.foreign_key = main.id',
    //         selectFields: ['field3', 'field4'], // Specify fields to select from yet_another_table
    //     },
    // ]);
}
/**
 * CommonQuery
 *
 * @description
 * A generic class to handle SQL queries for different models. It provides methods for
 * finding, inserting, updating, and deleting records using DTOs.
 */

/**
 * CommonQuery
 *
 * @description
 * A generic class to handle SQL queries for different models. It provides methods for
 * finding, inserting, updating, and deleting records using DTOs.
 */
export class CommonQuery5<T> {
    private model: string; // The name of the database table/model
    private allowedKeys: (keyof T)[]; // List of keys that can be used in queries

    /**
     * Constructor to initialize the CommonQuery class.
     * @param model - The name of the model/table for queries.
     * @param allowedKeys - The keys of the DTO that are allowed in queries.
     */
    constructor(model: string, allowedKeys: (keyof T)[]) {
        this.model = model;
        this.allowedKeys = allowedKeys;
    }

    /**
     * Finds records with dynamic joins, automatically creating aliases for each table.
     * @param joins - An array of objects containing the table name, join condition, join type, and selected fields.
     * @returns An object containing the query configuration for finding with joins.
     */
    findWithDynamicJoin(
        joins: Array<{
            table: string;
            condition: string; // Format: 'foreign_key=id'
            type?: 'JOIN' | 'LEFT JOIN';
            selectFields?: string[]; // Fields to select from the joined table
        }>
    ): object {
        return this.createQuery('SELECT_WITH_DYNAMIC_JOIN', (id: number) => {
            const fields = this.allowedKeys.join(', ');
            const mainAlias = 'main'; // Alias for the main table
            const joinClauses = joins
                .map((join, index) => {
                    const joinAlias = `table${index + 1}`; // Create an alias like table1, table2, etc.
                    const joinType = join.type ? join.type : 'JOIN'; // Default to INNER JOIN if no type is specified

                    // Split the condition to derive the join fields
                    const [foreignKey, mainField] = join.condition
                        .split('=')
                        .map((part) => part.trim());
                    const condition = `${join.table}.${foreignKey} = ${mainAlias}.${mainField}`;

                    return `${joinType} ${join.table} AS ${joinAlias} ON ${condition}`;
                })
                .join(' ');

            return `
                SELECT ${fields}, 
                ${joins
                    .map((join, index) => {
                        const alias = `table${index + 1}`;
                        return join.selectFields
                            ? join.selectFields.map((field) => `${alias}.${field}`).join(', ')
                            : '';
                    })
                    .filter((field) => field)
                    .join(', ')} 
                FROM ${this.model} AS ${mainAlias}
                ${joinClauses}
                WHERE ${mainAlias}.status = 1 AND ${mainAlias}.id = ${this.formatValue(id)};
            `;
        });
    }

    findWithDynamicJoin1(
        joins: Array<{
            table: string;
            condition: string; // Format: 'foreign_key=id'
            type?: 'JOIN' | 'LEFT JOIN';
            selectFields?: string[]; // Fields to select from the joined table
        }>,
        additionalConditions?: string // Additional dynamic WHERE conditions
    ): QueryConfig {
        // Specify the return type
        return {
            name: `SELECT_WITH_DYNAMIC_JOIN`,
            type: `join`,
            syntax: (id: number) => {
                // Accept id as a parameter
                const fields = this.allowedKeys.join(', ');
                const mainAlias = 'main'; // Alias for the main table
                const joinClauses = joins
                    .map((join, index) => {
                        const joinAlias = `table${index + 1}`; // Create an alias like table1, table2, etc.
                        const joinType = join.type ? join.type : 'JOIN'; // Default to INNER JOIN if no type is specified

                        // Split the condition to derive the join fields
                        const [foreignKey, mainField] = join.condition
                            .split('=')
                            .map((part) => part.trim());
                        const condition = `${join.table}.${foreignKey} = ${mainAlias}.${mainField}`;

                        return `${joinType} ${join.table} AS ${joinAlias} ON ${condition}`;
                    })
                    .join(' ');

                // Start building the WHERE clause
                const baseWhere = `${mainAlias}.status = 1 AND ${mainAlias}.id = ${this.formatValue(id)}`;
                const dynamicWhere = additionalConditions ? `AND ${additionalConditions}` : '';

                return `
            SELECT ${fields}, 
            ${joins
                .map((join, index) => {
                    const alias = `table${index + 1}`;
                    return join.selectFields
                        ? join.selectFields.map((field) => `${alias}.${field}`).join(', ')
                        : '';
                })
                .filter((field) => field)
                .join(', ')} 
            FROM ${this.model} AS ${mainAlias}
            ${joinClauses}
            WHERE ${baseWhere} ${dynamicWhere};
            `;
            },
        };
    }

    findWithDynamicJoin2(
        joins: Array<{
            table: string;
            condition: string; // Format: 'foreign_key=id'
            type?: 'JOIN' | 'LEFT JOIN';
            selectFields?: string[]; // Fields to select from the joined table
        }>,
        additionalConditions?: string // Additional dynamic WHERE conditions
    ): QueryConfig {
        return {
            name: `SELECT_WITH_DYNAMIC_JOIN`,
            type: `join,`,
            syntax: () => {
                const mainAlias = 'main';
                // const fields = this.allowedKeys.join(', ');
                const fields = this.allowedKeys
                    .map((field) => `${mainAlias}.${String(field)}`) // Ensure conversion to string
                    .join(', '); // Alias for the main table
                const joinClauses = joins
                    .map((join, index) => {
                        const joinAlias = `table${index + 1}`; // Create an alias like table1, table2, etc.
                        const joinType = join.type ? join.type : 'JOIN'; // Default to INNER JOIN if no type is specified

                        // Split the condition to derive the join fields
                        const [foreignKey, mainField] = join.condition
                            .split('=')
                            .map((part) => part.trim());
                        const condition = `${joinAlias}.${foreignKey} = ${mainAlias}.${mainField}`;

                        return `${joinType} ${join.table} AS ${joinAlias} ON ${condition}`;
                    })
                    .join(' ');

                // Start building the WHERE clause
                const baseWhere = `${mainAlias}.status = 1`;
                const dynamicWhere = additionalConditions ? `AND ${additionalConditions}` : '';

                return `
            SELECT ${fields}, 
            ${joins
                .map((join, index) => {
                    const alias = `table${index + 1}`;
                    return join.selectFields
                        ? join.selectFields.map((field) => `${alias}.${field}`).join(', ')
                        : '';
                })
                .filter((field) => field)
                .join(', ')} 
            FROM ${this.model} AS ${mainAlias}
            ${joinClauses}
            WHERE ${baseWhere} ${dynamicWhere};
        `;
            },
        };
    }
    findWithDynamicJoin3(
        joins: Array<{
            table: string;
            condition: string; // Format: 'foreign_key=id'
            type?: 'JOIN' | 'LEFT JOIN';
            selectFields?: string[]; // Fields to select from the joined table
            additionalConditions?: string[]; // Additional conditions for this specific table
        }>,
        baseAdditionalConditions?: string // Additional conditions for the main WHERE clause
    ): QueryConfig {
        return {
            name: `SELECT_WITH_DYNAMIC_JOIN`,
            type: `join`,
            syntax: () => {
                const mainAlias = 'main';
                const fields = this.allowedKeys
                    .map((field) => `${mainAlias}.${String(field)}`)
                    .join(', ');

                const joinClauses = joins
                    .map((join, index) => {
                        const joinAlias = `table${index + 1}`;
                        const joinType = join.type ? join.type : 'JOIN';

                        const [foreignKey, mainField] = join.condition
                            .split('=')
                            .map((part) => part.trim());
                        const condition = `${joinAlias}.${foreignKey} = ${mainAlias}.${mainField}`;

                        // Add dynamic conditions for the current join
                        const dynamicJoinConditions = join.additionalConditions
                            ? join.additionalConditions
                                  .map((cond) => `${joinAlias}.${cond}`)
                                  .join(' AND ')
                            : '';

                        return `${joinType} ${join.table} AS ${joinAlias} ON ${condition}${dynamicJoinConditions ? ' AND ' + dynamicJoinConditions : ''}`;
                    })
                    .join(' ');

                // Base where clause
                const baseWhere = `${mainAlias}.status = 1`;
                const dynamicWhere = baseAdditionalConditions
                    ? `AND ${baseAdditionalConditions}`
                    : '';

                return `
            SELECT ${fields}, 
            ${joins
                .map((join, index) => {
                    const alias = `table${index + 1}`;
                    return join.selectFields
                        ? join.selectFields.map((field) => `${alias}.${field}`).join(', ')
                        : '';
                })
                .filter((field) => field)
                .join(', ')} 
            FROM ${this.model} AS ${mainAlias}
            ${joinClauses}
            WHERE ${baseWhere} ${dynamicWhere};
        `;
            },
        };
    }

    /**
     * Creates a query object with a specific type and syntax generator.
     * @param type - The type of query (e.g., SELECT_ONE, INSERT).
     * @param syntaxGenerator - A function that generates the SQL syntax.
     * @returns An object containing the query configuration.
     */
    private createQuery(type: string, syntaxGenerator: (arg: any) => string): object {
        return {
            name: type.toLowerCase(),
            type,
            syntax: syntaxGenerator, // This is a function
        };
    }

    // private createQuery(type: string, syntaxGenerator: (arg: any) => string): object {
    //     return {
    //         name: type.toLowerCase(),
    //         type,
    //         syntax: syntaxGenerator,
    //     };
    // }

    /**
     * Formats a value for safe SQL query insertion.
     * @param value - The value to format.
     * @returns A string representation of the formatted value.
     */
    private formatValue(value: any): string {
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
    // commonQuery = new CommonQuery<YourDtoType>('your_table', ['id', 'name', 'status']);
    // queryConfig = commonQuery.findWithDynamicJoin([
    //     {
    //         table: 'another_table',
    //         condition: 'foreign_key=id', // Specify the join condition
    //         type: 'LEFT JOIN',
    //         selectFields: ['field1', 'field2'], // Specify fields to select from another_table
    //     },
    //     {
    //         table: 'yet_another_table',
    //         condition: 'foreign_key=id', // Specify the join condition
    //         selectFields: ['field3', 'field4'], // Specify fields to select from yet_another_table
    //     },
    // ]);
}
interface QueryConfig {
    name: string;
    type: string;
    syntax: (id: number) => string; // Method to generate SQL
}
