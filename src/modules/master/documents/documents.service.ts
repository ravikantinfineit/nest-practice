import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { IPaginationFieldConfig } from '@app/utils/types/pagination-options';
import { PaginationService } from '@services/pagination.service';
import { PrismaService } from '@services/prisma.service';
import { UtilsService } from '@services/util.service';
import { PaginationResponseDto } from '@utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@utils/dto/pagination.dto';

import { DocumentDto } from './dto/create.dto';
import { Document } from './dto/documents.dto';
import { UpdateDto } from './dto/update.dto';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `DocumentService` class, which provides methods to manage Document data.
 * It includes operations for creating, updating, retrieving, and deleting Document records.
 *
 * @module
 * @description
 * The `DocumentService` class is responsible for handling business logic related to Document entities.
 * It interacts with the database through the `PrismaService` and performs various operations using raw SQL queries.
 */
@Injectable()
export class DocumentService {
    private readonly MODULE: string;

    constructor(
        private readonly paginationService: PaginationService,
        private readonly prisma: PrismaService,
        private readonly query: Query,
        private readonly utilsService: UtilsService
    ) {
        this.MODULE = 'document';
    }

    /**
     * Creates a new document.
     * @param {DocumentDto} createDto - The data required to create a new document.
     * @returns {Promise<Document>} The created document object.
     * @throws {HttpException} If a document with the same name already exists or if an error occurs.
     */
    async create(createDto: DocumentDto): Promise<Document> {
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
     * Updates an existing document by its ID.
     * @param {string} id - The ID of the document to be updated.
     * @param {UpdateDto} updateDto - The data to update the document with.
     * @returns {Promise<Document | null>} The updated document object or null if not found.
     * @throws {HttpException} If the document is not found or if an error occurs.
     */
    async update(id: string, updateDto: UpdateDto): Promise<Document | null> {
        if (Object.keys(updateDto).length === 0) {
            throw new HttpException({ message: 'Nothing to update!' }, HttpStatus.BAD_REQUEST);
        }
        // Check if document exists
        const recordExists = await this.findOne(id);
        if (recordExists) {
            updateDto.id_document = id;
            // Update document
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
            throw new HttpException({ message: 'Document not found' }, HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Retrieves a list of documents with pagination.
     * @param {PaginationQueryDto} paginationQuery - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<Document>>} A paginated list of documents.
     */
    async findAll(paginationQuery: PaginationQueryDto): Promise<PaginationResponseDto<Document>> {
        const baseQuery = ['ptbl.id_document', 'ptbl.name', 'ptbl.status'];
        const fromQuery = ` FROM documents as ptbl`;

        const fieldConfigs: Record<string, IPaginationFieldConfig> = null;

        const { selectQuery, countQuery } = this.utilsService.buildDynamicQuery(
            paginationQuery,
            fieldConfigs,
            baseQuery,
            fromQuery,
            'ptbl.id_document'
        );

        return this.paginationService.paginate<Document>(selectQuery, countQuery, paginationQuery);
    }

    /**
     * Retrieves a single document by its ID.
     * @param {string} id - The ID of the document to retrieve.
     * @returns {Promise<Document>} The document object.
     * @throws {HttpException} If the document is not found.
     */
    async findOne(id: string): Promise<Document> {
        const result = await this.prisma.executeRawQuery(this.query.findById(), { id });
        if (!result) {
            throw new HttpException({ message: 'Document not found' }, HttpStatus.NOT_FOUND);
        }
        return result as any;
    }

    /**
     * Deletes a document by its ID.
     * @param {string} id - The ID of the document to delete.
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
