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

import { DocumentGroupService } from './document_grp.service';
import { DocumentGroupDto } from './dto/create.dto';
import { DocumentGroup } from './dto/document_grp.dto';
import { UpdateDto } from './dto/update.dto';

/**
 * @fileoverview
 * This file defines the `DocumentGroupController`, which handles HTTP requests related to document groups.
 * It provides endpoints to create, update, retrieve, and delete document group records.
 *
 * @module
 * @description
 * The `DocumentGroupController` is responsible for exposing endpoints that interact with the `DocumentGroupService`.
 * It uses various HTTP methods to manage document group data and handles responses with appropriate HTTP status codes.
 */
@ApiTags('DocumentGroups')
@Controller('document-groups')
export class DocumentGroupController {
    constructor(private readonly documentGroupService: DocumentGroupService) {}

    /**
     * @route POST /document-groups
     * @description Create a new document group.
     * @param {DocumentGroupDto} createDto - The data required to create a new document group.
     * @returns {Promise<DocumentGroup>} The created document group object.
     */
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({
        type: DocumentGroup,
        description: 'Create document group',
    })
    async create(@Body() createDto: DocumentGroupDto): Promise<DocumentGroup> {
        return this.documentGroupService.create(createDto);
    }

    /**
     * @route PATCH /document-groups/:id
     * @description Update an existing document group by its ID.
     * @param {string} id - The ID of the document group to be updated.
     * @param {UpdateDto} updateDto - The data to update the document group with.
     * @returns {Promise<DocumentGroup | null>} The updated document group object or null if not found.
     */
    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({
        type: DocumentGroup,
        description: 'Update document group',
    })
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateDto: UpdateDto
    ): Promise<DocumentGroup | null> {
        return this.documentGroupService.update(id, updateDto);
    }

    /**
     * @route GET /document-groups
     * @description Retrieve a list of document groups with pagination.
     * @param {PaginationQueryDto} query - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<DocumentGroup>>} A paginated list of document groups.
     */
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: PaginationResponse(DocumentGroup) })
    async findAll(
        @Query() query: PaginationQueryDto
    ): Promise<PaginationResponseDto<DocumentGroup>> {
        return this.documentGroupService.findAll(query);
    }

    /**
     * @route GET /document-groups/:id
     * @description Retrieve a single document group by its ID.
     * @param {string} id - The ID of the document group to retrieve.
     * @returns {Promise<DocumentGroup>} The document group object.
     */
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({
        type: DocumentGroup,
        description: 'Get document group by ID',
    })
    async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<DocumentGroup> {
        return this.documentGroupService.findOne(id);
    }

    /**
     * @route DELETE /document-groups/:id
     * @description Delete a document group by its ID.
     * @param {string} id - The ID of the document group to delete.
     * @returns {Promise<object>} An object indicating the deletion result.
     */
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id', type: String })
    @ApiOkResponse({
        status: HttpStatus.OK,
        description: 'Document group has been successfully deleted.',
    })
    async delete(@Param('id', ParseUUIDPipe) id: string): Promise<object> {
        return this.documentGroupService.delete(id);
    }
}
