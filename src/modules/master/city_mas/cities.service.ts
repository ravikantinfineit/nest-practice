import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { CommonQuery5 } from '@app/common/helper/services/comman.query';
import { IPaginationFieldConfig } from '@app/utils/types/pagination-options';
import { PaginationService } from '@services/pagination.service';
import { PrismaService } from '@services/prisma.service';
import { UtilsService } from '@services/util.service';
import { PaginationResponseDto } from '@utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@utils/dto/pagination.dto';

import { Cities } from './dto/cities.dto';
import { CityDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { Query } from './query';

/**
 * Service class for managing city data.
 */
@Injectable()
export class CityService {
    private readonly MODULE: string;

    constructor(
        private readonly paginationService: PaginationService,
        private readonly prisma: PrismaService,
        private readonly query: Query,
        private readonly utilsService: UtilsService,
        private commonQuery: CommonQuery5<CityDto>
    ) {
        this.commonQuery = new CommonQuery5<CityDto>('city_mas', ['id_city', 'name', 'status']);
        this.MODULE = 'city';
    }

    /**
     * Creates a new city.
     * @param {CityDto} createDto - The data required to create a new city.
     * @returns {Promise<Cities>} The created city object.
     * @throws {HttpException} If a city with the same name already exists or if an error occurs.
     */
    async create(createDto: CityDto): Promise<Cities> {
        const find = await this.prisma.executeRawQuery(this.query.findByName(), createDto);

        if (find) {
            throw new HttpException({ message: 'NAME ALREADY EXISTS' }, HttpStatus.CONFLICT);
        }

        const inserted = await this.prisma.executeRawQuery(this.query.insert(), createDto);

        if (inserted && inserted.insertid) {
            const get = await this.findOne(inserted.insertid);
            return get as any;
        } else {
            throw new HttpException(
                { message: 'Something went wrong' },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Updates an existing city by its ID.
     * @param {string} id - The ID of the city to be updated.
     * @param {UpdateDto} payload - The data to update the city with.
     * @returns {Promise<CityResponseDto | null>} The updated city object or null if not found.
     * @throws {HttpException} If the city is not found or if an error occurs.
     */
    async update(id: string, updateDto: UpdateDto): Promise<Cities | null> {
        if (id == undefined && Object.keys(updateDto).length === 0) {
            throw new HttpException(
                {
                    message: 'Nothing to be update!',
                },
                HttpStatus.BAD_REQUEST
            );
        }
        //check Data is Exits or not
        const recordExits = await this.findOne(id);
        if (recordExits) {
            updateDto.id_city = id;
            updateDto.updated_at = new Date().toISOString();
            //update
            const updated = await this.prisma.executeRawQuery(this.query.update(), updateDto);

            if (updated && updated[0].updatedid) {
                const get = await this.findOne(updated[0].updatedid);
                return get as any;
            } else {
                throw new HttpException(
                    { message: 'Something went wrong' },
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }
        } else {
            throw new HttpException({ message: 'city not found' }, HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Retrieves a list of cities with pagination.
     * @param {PaginationQueryDto} paginationQuery - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<Cities>>} A paginated list of cities.
     */
    async findAll(paginationQuery: PaginationQueryDto): Promise<PaginationResponseDto<Cities>> {
        // const commonQuery = new CommonQuery5('city_mas', ['id_city', 'name', 'status']);
        // const queryConfig = this.commonQuery.findWithDynamicJoin3(
        //     [
        //         {
        //             table: 'state_mas',
        //             condition: 'id_state=id_state', // Specify the join condition
        //             type: 'JOIN',
        //             selectFields: ['name', 'status'], // Specify fields to select from another_table
        //             additionalConditions: ['status=1'],
        //         },
        //         {
        //             table: 'country_mas',
        //             condition: 'id_country=id_country', // Specify the join condition
        //             selectFields: ['name', 'status'], // Specify fields to select from yet_another_table
        //             additionalConditions: ['status=1'],
        //         },
        //     ]
        //     //'country_mas.status=1 AND state_mas.status=1'
        // );
        // // const sqlQuery = queryConfig.syntax;
        // console.log('Query Config:', JSON.stringify(queryConfig, null, 2));
        // if (typeof queryConfig.syntax !== 'function') {
        //     throw new Error('Syntax function is not defined.');
        // }

        // // Call the syntax method to generate the actual SQL query string
        // const sqlQuery = queryConfig.syntax(1);

        // // Log the generated SQL query
        // console.log('Generated SQL Query:', sqlQuery);
        const baseQuery = [
            'ptbl.id_city',
            'ptbl.name',
            'ptbl.id_state',
            'ptbl.id_country',
            'ptbl.status',
        ];
        const fromQuery = ` FROM city_mas as ptbl`;

        const fieldConfigs: Record<string, IPaginationFieldConfig> = {
            id_country: {
                joinTable: (alias: string) =>
                    `JOIN country_mas ${alias} ON ${alias}.id_country = ptbl.id_country`,
                alias: () => `c${0}`,
                selectFields: (alias: string) => [`${alias}.name as country_name`],
            },
            id_state: {
                joinTable: (alias: string) =>
                    `JOIN state_mas ${alias} ON ${alias}.id_state = ptbl.id_state`,
                alias: () => `c${0}`,
                selectFields: (alias: string) => [`${alias}.name as state_name`],
            },
        };

        const { selectQuery, countQuery } = this.utilsService.buildDynamicQuery(
            paginationQuery,
            fieldConfigs,
            baseQuery,
            fromQuery,
            'ptbl.id_city'
        );

        return this.paginationService.paginate<Cities>(selectQuery, countQuery, paginationQuery);
    }

    // async getRecordsWithJoins(id: number): Promise<string> {
    //     const queryConfig = this.commonQuery.findWithDynamicJoin1(
    //         [
    //             {
    //                 table: 'state_mas',
    //                 condition: 'id_state=id_state', // Specify the join condition
    //                 type: 'JOIN',
    //                 selectFields: ['name', 'status'], // Specify fields to select from another_table
    //             },
    //             {
    //                 table: 'country_mas',
    //                 condition: 'id_country=id_country', // Specify the join condition
    //                 selectFields: ['name', 'status'], // Specify fields to select from yet_another_table
    //             },
    //         ],
    //         'country_mas.status=1 AND state_mas.status=1'
    //     );

    //     // You can now use the generated SQL query in your database access layer
    //     const sqlQuery = queryConfig.syntax(id); // This generates the actual SQL query string
    //     console.log(sqlQuery); // Log the SQL query for debugging or execution

    //     // Execute the SQL query using your preferred database library (e.g., TypeORM, Sequelize)
    //     // For example, if using TypeORM:
    //     // return await this.dataSource.query(sqlQuery);

    //     return sqlQuery; // Just for demonstration; replace with actual execution
    // }
    /**
     * Retrieves a single city by its ID.
     * @param {string} id - The ID of the city to retrieve.
     * @returns {Promise<CityResponseDto>} The city object.
     * @throws {HttpException} If the city is not found.
     */
    async findOne(id: string): Promise<Cities> {
        const result = await this.prisma.executeRawQuery(this.query.findById(), { id });
        if (!result) {
            throw new HttpException({ message: 'City not found' }, HttpStatus.NOT_FOUND);
        }
        return result as any;
    }

    /**
     * Deletes a city by its ID.
     * @param {string} id - The ID of the city to delete.
     * @returns {Promise<object>} An object indicating the deletion result.
     * @throws {HttpException} If an error occurs during deletion.
     */
    async delete(id: string): Promise<object> {
        const deleted = await this.prisma.executeRawQuery(this.query.delete(), id);

        if (deleted && deleted[0].deletedid) {
            return deleted;
        } else {
            throw new HttpException(
                { message: 'Something went wrong' },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
