import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { PaginationService } from '@app/common/helper/services/pagination.service';
import { PrismaService } from '@app/common/helper/services/prisma.service';
import { UtilsService } from '@app/common/helper/services/util.service';
import { PaginationResponseDto } from '@app/utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@app/utils/dto/pagination.dto';
import { IPaginationFieldConfig } from '@app/utils/types/pagination-options';

import { AddressType } from './dto/address_type';
import { AddresTypeDto as createDto } from './dto/create.dto';
import { AddressUpdateDto as UpdateDto } from './dto/update.dto';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `AddressTypeService` class, which provides methods to manage Address Type data.
 * It includes operations for creating, updating, retrieving, and deleting Addres Type.
 *
 * @module
 * @description
 * The `AddressTypeService` class is responsible for handaling business logic related to AddresType
 * It interacts with the Database through The `PrismaService` and performs various operations using raw SQL Query.
 */
@Injectable()
export class AddressTypeService {
    private readonly MODULE: string;
    constructor(
        private readonly prisma: PrismaService,
        private readonly query: Query,
        private readonly paginationService: PaginationService,
        private readonly utilsService: UtilsService
    ) {
        this.MODULE = 'address_type';
    }

    /**
     * Creates a new Address Type.
     * @param {createDto} createDto - The data required to create a new Address Type.
     * @returns {Promise<AddressType>} The created Address Type object.
     * @throws {HttpException} If a Address Type with the same name already exists or if an error occurs.
     */
    async create(createDto: createDto): Promise<AddressType> {
        //check if Address Type already with same name
        const find = await this.prisma.executeRawQuery(this.query.findByName(), createDto);
        if (find) {
            throw new HttpException({ message: 'Address Type Already Exits' }, HttpStatus.CONFLICT);
        }
        //insert new address Type
        const inserted = await this.prisma.executeRawQuery(this.query.insert(), createDto);
        if (!inserted && !inserted.insertid) {
            throw new HttpException(
                { message: 'Something Went Wrong' },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
        return await this.findOne(inserted.insertid);
    }
    /**
     *Update Existing Addres Type By its Id
     * @param {string} id -The ID of the adrres_type to be updated.
     * @param {UpdateDto} updateDto -Data to Update Address Type
     * @returns {Promise<AddressType | null>} The updated Address Type object or null if not found
     * @throws {HttpException} If the addres_type is not found or if an error occurs
     */
    async update(id: string, updateDto: UpdateDto): Promise<AddressType | null> {
        if (Object.keys(updateDto).length === 0) {
            throw new HttpException({ message: 'Nothing to update' }, HttpStatus.BAD_REQUEST);
        }
        //check record is exits or not
        const recordExists = this.findOne(id);
        if (recordExists) {
            updateDto.id_address_type = id;
            updateDto.updated_at = new Date().toISOString();
            //update adddress Type details
            const updated = await this.prisma.executeRawQuery(this.query.update(), updateDto);
            if (!updated && !updated[0].updatedid) {
                throw new HttpException(
                    { message: 'Something went wrong!' },
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }
            return await this.findOne(updated[0].updatedid);
        } else {
            throw new HttpException({ message: 'Address Type Not found' }, HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Retrieves a List of addres type with pagination
     * @param {PaginationQueryDto} paginationQuery - The pagination and filtering data
     * @returns {Promise<PaginationResponseDto<AddressType>>} - A paginated list of address Type
     */
    async findAll(
        paginationQuery: PaginationQueryDto
    ): Promise<PaginationResponseDto<AddressType>> {
        // Define the base query fields and source table
        const baseQuery = ['ptbl.id_address_type', 'ptbl.address_type', 'ptbl.status'];
        const fromQuery = 'FROM address_types AS ptbl';

        const fieldConfigs: Record<string, IPaginationFieldConfig> = null;

        // Build dynamic query based on pagination parameters
        const { selectQuery, countQuery } = this.utilsService.buildDynamicQuery(
            paginationQuery,
            fieldConfigs,
            baseQuery,
            fromQuery,
            'ptbl.id_address_type'
        );
        // Execute pagination service to get paginated results
        return this.paginationService.paginate<AddressType>(
            selectQuery,
            countQuery,
            paginationQuery
        );
    }

    /**
     *Retrieves Single Address Type By its Id.
     * @param {string} id - The Id of the Address Type to Retrieves.
     * @returns {Promise<AddressType>} - The AddressType Object.
     * @throws {HttpException} - If the addres type not Found.
     */
    async findOne(id: string): Promise<AddressType> {
        const result = await this.prisma.executeRawQuery(this.query.findById(), { id });
        if (!result) {
            throw new HttpException({ message: 'Address Type Not Found' }, HttpStatus.NOT_FOUND);
        }
        return result as any;
    }
    /**
     * delete addresss type by its id.
     * @param {string} id - The id of addres type to delete.
     * @returns {Promise<object>} - An object indicating the deletion result.
     * @throws {HttpException} - if an error occurs during delete
     */
    async delete(id: string): Promise<object> {
        //delete record
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
