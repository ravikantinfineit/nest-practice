import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiCreatedResponse, ApiParam } from '@nestjs/swagger';

import { PaginationResponse, PaginationResponseDto } from '@utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@utils/dto/pagination.dto';

import { DocumentService } from './documents.service';
import { DocumentDto } from './dto/create.dto';
import { Document } from './dto/documents.dto';
import { UpdateDto } from './dto/update.dto';

/**
 * @fileoverview
 * This file defines the `DocumentController`, which handles HTTP requests related to documents.
 * It provides endpoints to create, update, retrieve, and delete document records.
 *
 * @module
 * @description
 * The `DocumentController` is responsible for exposing endpoints that interact with the `DocumentService`.
 * It uses various HTTP methods to manage document data and handles responses with appropriate HTTP status codes.
 */
@ApiTags('Documents')
@Controller('documents')
export class DocumentController {
    constructor(private readonly documentService: DocumentService) {}

    /**
     * @route POST /documents
     * @description Create a new document.
     * @param {DocumentDto} createDto - The data required to create a new document.
     * @returns {Promise<Document>} The created document object.
     */
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({
        type: Document,
        description: 'Create document',
    })
    async create(@Body() createDto: DocumentDto): Promise<Document> {
        return this.documentService.create(createDto);
    }

    /**
     * @route PATCH /documents/:id
     * @description Update an existing document by its ID.
     * @param {string} id - The ID of the document to be updated.
     * @param {UpdateDto} updateDto - The data to update the document with.
     * @returns {Promise<Document | null>} The updated document object or null if not found.
     */
    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({
        type: Document,
        description: 'Update document',
    })
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateDto: UpdateDto
    ): Promise<Document | null> {
        return this.documentService.update(id, updateDto);
    }

    /**
     * @route GET /documents
     * @description Retrieve a list of documents with pagination.
     * @param {PaginationQueryDto} query - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<Document>>} A paginated list of documents.
     */
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: PaginationResponse(Document) })
    async findAll(@Query() query: PaginationQueryDto): Promise<PaginationResponseDto<Document>> {
        return this.documentService.findAll(query);
    }

    /**
     * @route GET /documents/:id
     * @description Retrieve a single document by its ID.
     * @param {string} id - The ID of the document to retrieve.
     * @returns {Promise<Document>} The document object.
     */
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({
        type: Document,
        description: 'Get document by ID',
    })
    async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Document> {
        return this.documentService.findOne(id);
    }

    /**
     * @route DELETE /documents/:id
     * @description Delete a document by its ID.
     * @param {string} id - The ID of the document to delete.
     * @returns {Promise<object>} An object indicating the deletion result.
     */
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({
        status: HttpStatus.OK,
        description: 'Document has been successfully deleted.',
    })
    async delete(@Param('id', ParseUUIDPipe) id: string): Promise<object> {
        return this.documentService.delete(id);
    }
}
