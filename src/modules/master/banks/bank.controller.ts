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

import { BankService } from './bank.service';
import { Banks } from './dto/bank.dto';
import { BankDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

/**
 * @fileoverview
 * This file defines the `BankController`, which handles HTTP requests related to bank data.
 * It provides endpoints to create, update, retrieve, and delete bank records.
 *
 * @module
 * @description
 * The `BankController` is responsible for exposing endpoints that interact with the `BankService`.
 * It uses various HTTP methods to manage bank data and handles responses with appropriate HTTP status codes.
 */
@ApiTags('Banks')
@Controller('banks')
export class BankController {
    constructor(private readonly bankService: BankService) {}

    /**
     * @route POST /banks
     * @description Create a new bank.
     * @param {BankDto} createDto - The data required to create a new bank.
     * @returns {Promise<Bank>} The created bank object.
     */
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({
        type: Banks,
        description: 'Create bank',
    })
    async create(@Body() createDto: BankDto): Promise<Banks> {
        return this.bankService.create(createDto);
    }

    /**
     * @route PATCH /banks/:id_bank
     * @description Update an existing bank by its ID.
     * @param {string} id - The ID of the bank to be updated.
     * @param {UpdateDto} updateDto - The data to update the bank with.
     * @returns {Promise<Banks | null>} The updated bank object or null if not found.
     */
    @Patch(':id_bank')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_bank', type: String })
    @ApiOkResponse({
        type: Banks,
        description: 'Update bank',
    })
    async update(
        @Param('id_bank', ParseUUIDPipe) id: string,
        @Body() updateDto: UpdateDto
    ): Promise<Banks | null> {
        return this.bankService.update(id, updateDto);
    }

    /**
     * @route GET /banks
     * @description Retrieve a list of banks with pagination.
     * @param {PaginationQueryDto} query - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<Banks>>} A paginated list of banks.
     */
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: PaginationResponse(Banks) })
    async findAll(@Query() query: PaginationQueryDto): Promise<PaginationResponseDto<Banks>> {
        return this.bankService.findAll(query);
    }

    /**
     * @route GET /banks/:id_bank
     * @description Retrieve a single bank by its ID.
     * @param {string} id - The ID of the bank to retrieve.
     * @returns {Promise<Banks>} The bank object.
     */
    @Get(':id_bank')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_bank', type: String })
    @ApiOkResponse({
        type: Banks,
        description: 'Get bank by ID',
    })
    async findOne(@Param('id_bank', ParseUUIDPipe) id: string): Promise<Banks> {
        return this.bankService.findOne(id);
    }

    /**
     * @route DELETE /banks/:id_bank
     * @description Delete a bank by its ID.
     * @param {string} id - The ID of the bank to delete.
     * @returns {Promise<object>} An object indicating the deletion result.
     */
    @Delete(':id_bank')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_bank', type: String })
    @ApiOkResponse({
        status: HttpStatus.OK,
        description: 'Bank has been successfully deleted.',
    })
    async delete(@Param('id_bank', ParseUUIDPipe) id: string): Promise<object> {
        return this.bankService.delete(id);
    }
}
