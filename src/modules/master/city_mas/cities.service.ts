import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

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
        private readonly utilsService: UtilsService
    ) {
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
     * @param {PaginationQueryDto} query - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<Cities>>} A paginated list of cities.
     */
    async findAll(paginationQuery: PaginationQueryDto): Promise<PaginationResponseDto<Cities>> {
        const baseQuery = [
            'ptbl.id_city',
            'ptbl.name',
            'ptbl.id_state',
            'ptbl.id_country',
            'ptbl.status',
        ];
        const fromQuery = ` FROM city_mas as ptbl`;

        const fieldConfigs: Record<string, IPaginationFieldConfig> = null;

        const { selectQuery, countQuery } = this.utilsService.buildDynamicQuery(
            paginationQuery,
            fieldConfigs,
            baseQuery,
            fromQuery,
            'ptbl.id_city'
        );

        return this.paginationService.paginate<Cities>(selectQuery, countQuery, paginationQuery);
    }

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
