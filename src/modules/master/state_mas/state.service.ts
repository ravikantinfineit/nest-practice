import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { PrismaService } from '@services/prisma.service';
import { PaginationResponseDto } from '@utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@utils/dto/pagination.dto';
import { DeepPartial } from '@utils/types/deep-partial.type';

import { StateDto } from './dto/create.dto';
import { State } from './dto/state.dto';
import { Query } from './query';

/**
 * Service class for managing state data.
 */
@Injectable()
export class StateService {
    private readonly MODULE: string;

    constructor(
        private readonly prisma: PrismaService,
        private readonly query: Query
    ) {
        this.MODULE = 'state';
    }

    /**
     * Creates a new state.
     * @param {CreateStateDto} createDto - The data required to create a new state.
     * @returns {Promise<StateResponseDto>} The created state object.
     * @throws {HttpException} If a state with the same name already exists or if an error occurs.
     */
    async create(createDto: StateDto): Promise<State> {
        const find = await this.prisma.executeRawQuery(this.query.findByName(), createDto);

        if (find) {
            throw new HttpException({ message: 'NAME ALREADY EXISTS' }, HttpStatus.CONFLICT);
        }

        const inserted = await this.prisma.executeRawQuery(this.query.insert(), createDto, [
            'name',
        ]);

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
     * @param {DeepPartial<StateResponseDto>} payload - The data to update the state with.
     * @returns {Promise<StateResponseDto | null>} The updated state object or null if not found.
     * @throws {HttpException} If the state is not found or if an error occurs.
     */
    async update(id: string, payload: DeepPartial<State>): Promise<State | null> {
        const find = await this.prisma.executeRawQuery(this.query.findByName(id), payload);

        if (find) {
            throw new HttpException({ message: 'NAME ALREADY EXISTS' }, HttpStatus.CONFLICT);
        }

        const updated = await this.prisma.executeRawQuery(this.query.update(), { ...payload, id });

        if (updated && updated.updatedid) {
            const get = await this.findOne(updated.updatedid);
            return get as any;
        } else {
            throw new HttpException(
                { message: 'Something went wrong' },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Retrieves a list of states with pagination.
     * @param {PaginationQueryDto} _query - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<StateResponseDto>>} A paginated list of states.
     */
    async findAll(query: PaginationQueryDto): Promise<PaginationResponseDto<State>> {
        console.log(query);
        return;
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

        if (deleted && deleted.deletedid) {
            return deleted;
        } else {
            throw new HttpException(
                { message: 'Something went wrong' },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
