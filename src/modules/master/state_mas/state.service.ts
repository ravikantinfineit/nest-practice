import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { PaginationService } from '@app/common/helper/services/pagination.service';
import { UtilsService } from '@app/common/helper/services/util.service';
import { IPaginationFieldConfig } from '@app/utils/types/pagination-options';
import { PrismaService } from '@services/prisma.service';
import { PaginationResponseDto } from '@utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@utils/dto/pagination.dto';

import { StateDto } from './dto/create.dto';
import { State } from './dto/state.dto';
import { UpdateDto } from './dto/update.dto';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `StateService` class, which provides methods to manage State data.
 * It includes operations for creating, updating, retrieving, and deleting State.
 *
 * @module
 * @description
 * The `StateService` class is responsible for handling business logic related to State.
 * It interacts with the database through the `PrismaService` and performs various operations using raw SQL queries.
 */
@Injectable()
export class StateService {
    private readonly MODULE: string;

    constructor(
        private readonly paginationService: PaginationService,
        private readonly prisma: PrismaService,
        private readonly query: Query,
        private readonly utilsService: UtilsService
    ) {
        this.MODULE = 'state';
    }

    /**
     * Creates a new state.
     * @param {StateDto} createDto - The data required to create a new state.
     * @returns {Promise<State>} The created state object.
     * @throws {HttpException} If a state with the same name already exists or if an error occurs.
     */
    async create(createDto: StateDto): Promise<State> {
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
     * Updates an existing state by its ID.
     * @param {string} id - The ID of the state to be updated.
     * @param {UpdateDto} updateDto - The data to update the state with.
     * @returns {Promise<State | null>} The updated state object or null if not found.
     * @throws {HttpException} If the state is not found or if an error occurs.
     */
    async update(id: string, updateDto: UpdateDto): Promise<State | null> {
        if (Object.keys(updateDto).length === 0) {
            throw new HttpException({ message: 'Nothing to update!' }, HttpStatus.BAD_REQUEST);
        }
        // check country exits or not
        const recordExits = await this.findOne(id);
        if (recordExits) {
            updateDto.id_state = id;
            updateDto.updated_at = new Date().toISOString();
            // update
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
            throw new HttpException({ message: 'record not exits' }, HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Retrieves a list of states with pagination.
     * @param {PaginationQueryDto} query - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<State>>} A paginated list of states.
     */
    async findAll(paginationQuery: PaginationQueryDto): Promise<PaginationResponseDto<State>> {
        const baseQuery = ['ptbl.id_state', 'ptbl.name', 'ptbl.id_country', 'ptbl.status'];
        const fromQuery = ` FROM state_mas as ptbl`;

        const fieldConfigs: Record<string, IPaginationFieldConfig> = {
            id_country: {
                joinTable: (alias: string) =>
                    `JOIN country_mas ${alias} ON ${alias}.id_country = ptbl.id_country`,
                alias: () => `c${0}`,
                selectFields: (alias: string) => [`${alias}.name as country_name`],
            },
        };

        const { selectQuery, countQuery } = this.utilsService.buildDynamicQuery(
            paginationQuery,
            fieldConfigs,
            baseQuery,
            fromQuery,
            'ptbl.id_state'
        );

        return this.paginationService.paginate<State>(selectQuery, countQuery, paginationQuery);
    }

    /**
     * Retrieves a single state by its ID.
     * @param {string} id - The ID of the state to retrieve.
     * @returns {Promise<StateResponseDto>} The state object.
     * @throws {HttpException} If the state is not found.
     */
    async findOne(id: string): Promise<State> {
        const result = await this.prisma.executeRawQuery(this.query.findById(), { id });
        if (!result) {
            throw new HttpException({ message: 'State not found' }, HttpStatus.NOT_FOUND);
        }
        return result as any;
    }

    /**
     * Deletes a state by its ID.
     * @param {string} id - The ID of the state to delete.
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
