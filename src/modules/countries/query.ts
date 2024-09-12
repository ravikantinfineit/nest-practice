import _ from 'lodash';

import { UtilsService } from '@app/common/helper/services/util.service';

export class Query {
    constructor(private readonly utilsService: UtilsService) {}

    /**
     * Generates a SQL query to find a Country by its name.
     * @param {string} [name] - using name of country finde data from database.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    findByName(): object {
        return {
            name: `findByName`,
            type: `SELECT_ONE`,
            syntax: (where: any) => {
                const allowedKeys = ['id_country', 'name', 'iso3'];
                const name = _.get(where, 'name');

                return `SELECT ${allowedKeys.join()} FROM countries  WHERE status = 1 AND name = '${name}'`;
            },
        };
    }

    /**
     * Generates a SQL insert query to insert new Country in database.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */

    insert(): object {
        return {
            name: `add`,
            type: `INSERT`,
            syntax: (where: any) => {
                const allowedKeys = [
                    'name',
                    'iso',
                    'nice_name',
                    'iso3',
                    'num_code',
                    'dial_code',
                    'continent',
                    'capital',
                    'id_currency',
                    'id_timezone',
                ];
                const conds = _.pick(where, allowedKeys);
                const keys = _.keys(conds);
                const values = _.values(conds);
                const values1 = keys.map((key) => this.formatValue(conds[key])).join(', ');
                console.log('keys --' + keys);
                console.log('values --' + values);
                console.log('Formated --' + values1);
                // const query = `INSERT INTO countries  (${keys.join()}) VALUES ('${values.join("','")}') RETURNING id_country as insertid,name;`;
                const query = `INSERT INTO countries  (${keys.join()}) VALUES (${keys.map((key) => this.formatValue(conds[key])).join(', ')}) RETURNING id_country as insertid,name;`;
                console.log('Query--- ' + query);
                return query;
            },
        };
    }

    // async update1(id: string, data: any): Promise<string> {
    //     const keys = Object.keys(data).filter((key) => data[key] !== undefined);
    //     const setColumnwithValue = keys
    //         .map((key) => `${key} = ${this.formatValue(data[key])}`)
    //         .join(', ');
    //     return `UPDATE countries SET ${setColumnwithValue} WHERE id_country  = ${this.formatValue(id)} AND status = 1 RETURNING id_country as upadetId ;`;
    // }

    /**
     * Generates a SQL update query to update country .
     * @param {string} [id_country] - using id_country of country to update country in database.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */
    update(): object {
        return {
            name: `update`,
            type: `UPDATE`,
            syntax: (where: any) => {
                let sql = `UPDATE countries SET `;
                const id = _.get(where, 'id_country');
                _.unset(where, 'id_country');
                const allowedKeys = [
                    'name',
                    'iso',
                    'nice_name',
                    'iso3',
                    'num_code',
                    'dial_code',
                    'continent',
                    'capital',
                    'id_currency',
                    'id_timezone',
                ];
                where = _.pick(where, allowedKeys);

                const lastKey = Object.keys(where)[Object.keys(where).length - 1];
                _.mapKeys(where, (value, key) => {
                    sql += `${key} = '${value}'`;
                    sql += lastKey == key ? `` : `, `;
                });
                sql += ` WHERE status = 1 AND id_country = '${id}' RETURNING id_country as updatedid, name;`;
                console.log('update q--' + sql);
                return sql;
            },
        };
    }

    /**
     * Generates a SQL query to find a Country by its ID.
     * @returns {string} The return select query string .
     */

    findById(id: string): string {
        const allowedKeys = [
            'c.name',
            'c.iso',
            'c.nice_name',
            'c.iso3',
            'c.num_code',
            'c.dial_code',
            'c.continent',
            'c.capital',
            'cr.symbol',
            'cr.name as currency_name',
            'tz.value',
            'tz.offset',
            'tz.offset_in_minutes',
            'tz.abbr',
            'tz.text',
        ];

        const query = `SELECT ${allowedKeys} FROM countries as c 
        JOIN currencies AS cr ON cr.id_currency=c.id_currency
        JOIN timezone AS tz ON tz.id_timezone=c.id_timezone
        WHERE c.status = 1 AND c.id_country='${id}' `;
        console.log('Query--' + query);
        return query;
    }

    /**
     * Generates a SQL query to delete a Country by its ID.
     * @param {string} id - The ID of the Country to delete.
     * @returns {object} The query configuration object with `name`, `type`, and `syntax` properties.
     */

    delete(): object {
        return {
            name: `delete`,
            type: `UPDATE`,
            syntax: (id: string) => {
                const sql = `UPDATE countries SET status = 127 WHERE status = 1 AND id_country = '${id}' RETURNING id_country as deletedid, name;`;
                console.log('delete --QQ ' + sql);
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
