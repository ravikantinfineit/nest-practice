import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { PaginationService } from '@app/common/helper/services/pagination.service';
import { UtilsService } from '@app/common/helper/services/util.service';
import { IPaginationFieldConfig } from '@app/utils/types/pagination-options';
import { PrismaService } from '@services/prisma.service';
import { PaginationResponseDto } from '@utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@utils/dto/pagination.dto';

import { DocumentGroupDto } from './dto/create.dto';
import { DocumentGroup } from './dto/document_grp.dto';
import { UpdateDto } from './dto/update.dto';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `DocumentGroupService` class, which provides methods to manage document group data.
 * It includes operations for creating, updating, retrieving, and deleting document groups.
 *
 * @module
 * @description
 * The `DocumentGroupService` class is responsible for handling business logic related to document groups.
 * It interacts with the database through the `PrismaService` and performs various operations using raw SQL queries.
 */
@Injectable()
export class DocumentGroupService {
    private readonly MODULE: string;

    constructor(
        private readonly paginationService: PaginationService,
        private readonly prisma: PrismaService,
        private readonly query: Query,
        private readonly utilsService: UtilsService
    ) {
        this.MODULE = 'document-group';
    }

    /**
     * Creates a new document group.
     * @param {DocumentGroupDto} createDto - The data required to create a new document group.
     * @returns {Promise<DocumentGroup>} The created document group object.
     * @throws {HttpException} If a document group with the same name already exists or if an error occurs.
     */
    async create(createDto: DocumentGroupDto): Promise<DocumentGroup> {
        // Check if a document group with the same name already exists
        const find = await this.prisma.executeRawQuery(this.query.findByName(), createDto);

        if (find) {
            throw new HttpException({ message: 'NAME ALREADY EXISTS' }, HttpStatus.CONFLICT);
        }

        // Insert the new document group
        const inserted = await this.prisma.executeRawQuery(this.query.insert(), createDto);

        if (inserted && inserted.insertid) {
            // Retrieve and return the newly created document group
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
     * Updates an existing document group by its ID.
     * @param {string} id - The ID of the document group to be updated.
     * @param {UpdateDto} updateDto - The data to update the document group with.
     * @returns {Promise<DocumentGroup | null>} The updated document group object or null if not found.
     * @throws {HttpException} If the document group is not found or if an error occurs.
     */
    async update(id: string, updateDto: UpdateDto): Promise<DocumentGroup | null> {
        if (Object.keys(updateDto).length === 0) {
            throw new HttpException({ message: 'Nothing to update!' }, HttpStatus.BAD_REQUEST);
        }

        // Check if the document group exists
        const recordExits = await this.findOne(id);
        if (recordExits) {
            updateDto.id_document_group = id;
            updateDto.updated_at = new Date().toISOString();
            // Update the document group
            const updated = await this.prisma.executeRawQuery(this.query.update(), updateDto);

            if (updated && updated[0].updatedid) {
                // Retrieve and return the updated document group
                const get = await this.findOne(updated[0].updatedid);
                return get as any;
            } else {
                throw new HttpException(
                    { message: 'Something went wrong' },
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }
        } else {
            throw new HttpException({ message: 'Document group not found' }, HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Retrieves a list of document groups with pagination.
     * @param {PaginationQueryDto} paginationQuery - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<DocumentGroup>>} A paginated list of document groups.
     */
    async findAll(
        paginationQuery: PaginationQueryDto
    ): Promise<PaginationResponseDto<DocumentGroup>> {
        const baseQuery = ['ptbl.id_document_group', 'ptbl.name', 'ptbl.status'];
        const fromQuery = ` FROM document_groups as ptbl`;

        const fieldConfigs: Record<string, IPaginationFieldConfig> = null;

        // Build the dynamic query for pagination
        const { selectQuery, countQuery } = this.utilsService.buildDynamicQuery(
            paginationQuery,
            fieldConfigs,
            baseQuery,
            fromQuery,
            'ptbl.id_document_group'
        );

        return this.paginationService.paginate<DocumentGroup>(
            selectQuery,
            countQuery,
            paginationQuery
        );
    }

    /**
     * Retrieves a single document group by its ID.
     * @param {string} id - The ID of the document group to retrieve.
     * @returns {Promise<DocumentGroup>} The document group object.
     * @throws {HttpException} If the document group is not found.
     */
    async findOne(id: string): Promise<DocumentGroup> {
        const result = await this.prisma.executeRawQuery(this.query.findById(), { id });
        if (!result) {
            throw new HttpException({ message: 'Document group not found' }, HttpStatus.NOT_FOUND);
        }
        return result as any;
    }

    /**
     * Deletes a document group by its ID.
     * @param {string} id - The ID of the document group to delete.
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
