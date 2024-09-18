import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { PaginationService } from '@app/common/helper/services/pagination.service';
import { UtilsService } from '@app/common/helper/services/util.service';
import { IPaginationFieldConfig } from '@app/utils/types/pagination-options';
import { PrismaService } from '@services/prisma.service';
import { PaginationResponseDto } from '@utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@utils/dto/pagination.dto';

import { Banks } from './dto/bank.dto'; // DTO for bank data
import { BankDto } from './dto/create.dto'; // DTO for creating a bank
import { UpdateDto } from './dto/update.dto'; // DTO for updating a bank
import { Query } from './query'; // Query class for generating SQL queries

/**
 * @fileoverview
 * This file defines the `BankService` class, which provides methods to manage bank data.
 * It includes operations for creating, updating, retrieving, and deleting banks.
 *
 * @module
 * @description
 * The `BankService` class is responsible for handling business logic related to banks.
 * It interacts with the database through the `PrismaService` and performs various operations using raw SQL queries.
 */
@Injectable()
export class BankService {
    private readonly MODULE: string;

    constructor(
        private readonly paginationService: PaginationService,
        private readonly prisma: PrismaService,
        private readonly query: Query,
        private readonly utilsService: UtilsService
    ) {
        this.MODULE = 'bank';
    }

    /**
     * Creates a new bank.
     * @param {BankDto} createDto - The data required to create a new bank.
     * @returns {Promise<Banks>} The created bank object.
     * @throws {HttpException} If a bank with the same name already exists or if an error occurs.
     */
    async create(createDto: BankDto): Promise<Banks> {
        // Check if a bank with the same name already exists
        const find = await this.prisma.executeRawQuery(this.query.findByName(), createDto);

        if (find) {
            throw new HttpException({ message: 'NAME ALREADY EXISTS' }, HttpStatus.CONFLICT);
        }

        // Insert the new bank
        const inserted = await this.prisma.executeRawQuery(this.query.insert(), createDto);

        if (inserted && inserted.insertid) {
            // Retrieve and return the newly created bank
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
     * Updates an existing bank by its ID.
     * @param {string} id - The ID of the bank to be updated.
     * @param {UpdateDto} updateDto - The data to update the bank with.
     * @returns {Promise<Banks | null>} The updated bank object or null if not found.
     * @throws {HttpException} If the bank is not found or if an error occurs.
     */
    async update(id: string, updateDto: UpdateDto): Promise<Banks | null> {
        if (Object.keys(updateDto).length === 0) {
            throw new HttpException({ message: 'Nothing to update!' }, HttpStatus.BAD_REQUEST);
        }

        // Check if the bank record exists
        const recordExists = await this.findOne(id);
        if (recordExists) {
            updateDto.id_bank = id;
            // Update the bank details
            const updated = await this.prisma.executeRawQuery(this.query.update(), updateDto);

            if (updated && updated[0].updatedid) {
                // Retrieve and return the updated bank
                const get = await this.findOne(updated[0].updatedid);
                return get as any;
            } else {
                throw new HttpException(
                    { message: 'Something went wrong' },
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }
        } else {
            throw new HttpException({ message: 'Bank not found' }, HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Retrieves a list of banks with pagination.
     * @param {PaginationQueryDto} paginationQuery - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<Banks>>} A paginated list of banks.
     */
    async findAll(paginationQuery: PaginationQueryDto): Promise<PaginationResponseDto<Banks>> {
        // Define the base query fields and source table
        const baseQuery = [
            'ptbl.id_bank',
            'ptbl.name',
            'ptbl.short_name',
            'ptbl.id_city',
            'ptbl.id_state',
            'ptbl.id_country',
            'ptbl.status',
        ];
        const fromQuery = ` FROM banks_mas as ptbl`;

        const fieldConfigs: Record<string, IPaginationFieldConfig> = null;

        // Build dynamic query based on pagination parameters
        const { selectQuery, countQuery } = this.utilsService.buildDynamicQuery(
            paginationQuery,
            fieldConfigs,
            baseQuery,
            fromQuery,
            'ptbl.id_bank'
        );

        // Execute pagination service to get paginated results
        return this.paginationService.paginate<Banks>(selectQuery, countQuery, paginationQuery);
    }

    /**
     * Retrieves a single bank by its ID.
     * @param {string} id - The ID of the bank to retrieve.
     * @returns {Promise<Banks>} The bank object.
     * @throws {HttpException} If the bank is not found.
     */
    async findOne(id: string): Promise<Banks> {
        const result = await this.prisma.executeRawQuery(this.query.findById(), { id });
        if (!result) {
            throw new HttpException({ message: 'Bank not found' }, HttpStatus.NOT_FOUND);
        }
        return result as any;
    }

    /**
     * Deletes a bank by its ID.
     * @param {string} id - The ID of the bank to delete.
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
