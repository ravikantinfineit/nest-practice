import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { PaginationService } from '@services/pagination.service';
import { PrismaService } from '@services/prisma.service';
import { UtilsService } from '@services/util.service';
import { PaginationResponseDto } from '@utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@utils/dto/pagination.dto';
import { IPaginationFieldConfig } from '@utils/types/pagination-options';

import { CountryMas } from './dto/country_mas.dto';
import { CountryDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `CountriesService` class, which provides methods to manage country data.
 * It includes operations for creating, updating, retrieving, and deleting countries.
 *
 * @module
 * @description
 * The `CountriesService` class is responsible for handling business logic related to countries.
 * It interacts with the database through the `PrismaService` and performs various operations using raw SQL queries.
 */
@Injectable()
export class CountriesService {
    private readonly MODULE: string;

    /**
     * Creates an instance of `CountriesService`.
     * @param {PaginationService} paginationService - Service to handle pagination logic.
     * @param {PrismaService} prisma - Service to interact with the database.
     * @param {Query} query - Service for SQL query generation.
     * @param {UtilsService} utilsService - Service for utility functions, including dynamic query building.
     */
    constructor(
        private readonly paginationService: PaginationService,
        private readonly prisma: PrismaService,
        private readonly query: Query,
        private readonly utilsService: UtilsService
    ) {
        this.MODULE = 'country_mas';
    }

    /**
     * Creates a new country.
     * @param {CountryDto} CountryDto - Data required to create a new country.
     * @returns {Promise<CountryMas>} The created country object.
     * @throws {HttpException} If the country already exists or if an error occurs during creation.
     */
    async create(CountryDto: CountryDto): Promise<CountryMas> {
        // Check if the country already exists
        const find = await this.prisma.executeRawQuery(this.query.findByName(), CountryDto);

        if (find) {
            throw new HttpException({ message: 'Country already exists' }, HttpStatus.CONFLICT);
        }

        // Create the country
        const inserted = await this.prisma.executeRawQuery(this.query.insert(), CountryDto);

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
     * Updates an existing country by its ID.
     * @param {string} id - The ID of the country to update.
     * @param {UpdateDto} updateDto - Data to update the country with.
     * @returns {Promise<Country | null>} The updated country object or null if not found.
     * @throws {HttpException} If nothing to update is provided or if an error occurs during the update.
     */
    async update(id: string, updateDto: UpdateDto): Promise<CountryMas | null> {
        if (Object.keys(updateDto).length === 0) {
            throw new HttpException({ message: 'Nothing to update!' }, HttpStatus.BAD_REQUEST);
        }
        // check country exits or not
        const recordExits = await this.findOne(id);
        if (recordExits) {
            // Update
            updateDto.id_country = id;
            updateDto.updated_at = new Date().toISOString();
            const updated = await this.prisma.executeRawQuery(this.query.update(), updateDto);

            if (!updated) {
                throw new HttpException(
                    { message: 'Something went wrong' },
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }

            if (updated[0]?.updatedid) {
                const get = await this.findOne(id);
                return get;
            } else {
                throw new HttpException(
                    { message: `${this.MODULE} not found` },
                    HttpStatus.NOT_FOUND
                );
            }
        } else {
            throw new HttpException({ message: `country not found` }, HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Retrieves a paginated list of countries.
     * @param {PaginationQueryDto} paginationQuery - Pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<Country>>} A paginated list of countries.
     */
    async findAll(paginationQuery: PaginationQueryDto): Promise<PaginationResponseDto<CountryMas>> {
        const baseQuery = ['ptbl.id_country', 'ptbl.name', 'ptbl.dial_code', 'ptbl.status'];
        const fromQuery = ` FROM country_mas as ptbl`;

        const fieldConfigs: Record<string, IPaginationFieldConfig> = null;

        const { selectQuery, countQuery } = this.utilsService.buildDynamicQuery(
            paginationQuery,
            fieldConfigs,
            baseQuery,
            fromQuery,
            'ptbl.id_country'
        );

        return this.paginationService.paginate<CountryMas>(
            selectQuery,
            countQuery,
            paginationQuery
        );
    }

    /**
     * Deletes a country by its ID.
     * @param {string} id - The ID of the country to delete.
     * @returns {Promise<object>} An object indicating the result of the deletion.
     * @throws {HttpException} If an error occurs during deletion or if the country is not found.
     */
    async delete(id: string): Promise<object> {
        const deleted = await this.prisma.executeRawQuery(this.query.delete(), id);

        if (!deleted) {
            throw new HttpException(
                { message: 'Something went wrong' },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }

        if (deleted[0]?.deletedid) {
            return { status: `${this.MODULE} has been successfully deleted` };
        } else {
            throw new HttpException({ message: `${this.MODULE} not found` }, HttpStatus.NOT_FOUND);
        }
    }

    /*** HELPER METHODS */

    /**
     * Retrieves a country by its ID.
     * @param {string} id - The ID of the country to retrieve.
     * @returns {Promise<Country>} The country object.
     */
    async findOne(id: string): Promise<CountryMas> {
        const data = await this.prisma.executeRawQuery(this.query.findById(), { id });
        return data;
    }
}
