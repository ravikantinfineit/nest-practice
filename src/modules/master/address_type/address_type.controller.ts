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
import { ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

import { PaginationResponse, PaginationResponseDto } from '@app/utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@app/utils/dto/pagination.dto';

import { AddressTypeService } from './address_type.service';
import { AddressType } from './dto/address_type';
import { AddresTypeDto as CreateDto } from './dto/create.dto';
import { AddressUpdateDto as UpdateDto } from './dto/update.dto';

/**
 *@fileoverview
 * This file define the `AddressTypeController`, which handles HTTP request related to Address Type.
 * It provides endpoints to create, update, retrieve, and delete addres_type records.
 *
 * @module
 * @description
 * The `AddressTypeController` is responsible for exposing endpoints that interact with the `AddressTypeService`.
 * It uses various HTTP methods to manage addres_type data and handles responses with appropriate HTTP status codes.
 */
@ApiTags('Address Type')
@Controller('address_type')
export class AddressTypeController {
    constructor(private readonly addressService: AddressTypeService) {}

    /**
     * @route POST /addres_type
     * @description - Create a new addres type
     * @param {CreateDto} createDto - The data required to create new Address Type
     * @returns {Promise<AddressType>} - The create Object
     */
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({
        type: AddressType,
        description: 'Address Type created',
    })
    async create(@Body() createDto: CreateDto): Promise<AddressType> {
        return await this.addressService.create(createDto);
    }

    /**
     * @route - PATCH /:id_address_type
     * @description - Update an Existing addres_type by its Id.
     * @param {string} id - The id of Address Type To Update.
     * @param {UpdateDto} updateDto - The data to update address type
     * @returns {Promise<AddressType | null>} - The updated Object or nul if not found
     */
    @Patch(':id_address_type')
    @HttpCode(HttpStatus.OK)
    @ApiParam({
        name: 'id_address_type',
        type: String,
    })
    @ApiOkResponse({
        type: AddressType,
        description: 'Address Type Updated',
    })
    async update(
        @Param('id_address_type', ParseUUIDPipe) id: string,
        @Body() updateDto: UpdateDto
    ): Promise<AddressType | null> {
        return await this.addressService.update(id, updateDto);
    }

    /**
     * @route GET /address_type
     * @description - Retrieves a list of addres_type with pagination.
     * @param {PaginationQueryDto} query - The pagination with filtering parameter.
     * @returns {Promise<PaginationResponseDto<AddressType>>} - A paginated list of addres_type
     */
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: PaginationResponse<AddressType> })
    async findAll(@Query() query: PaginationQueryDto): Promise<PaginationResponseDto<AddressType>> {
        return await this.addressService.findAll(query);
    }

    /**
     * @route GET /address_type/:id_address_type
     * @description - Retrieves single address type by its id.
     * @param {String} id -The id of addres type to retrieve.
     * @returns {Promise<AddressType>} The addres type object
     */

    @Get(':id_address_type')
    @HttpCode(HttpStatus.OK)
    @ApiParam({
        name: 'id_address_type',
        type: String,
    })
    @ApiOkResponse({
        type: AddressType,
        description: 'Get address_type by id',
    })
    async findOne(@Param('id_address_type', ParseUUIDPipe) id: string): Promise<AddressType> {
        return await this.addressService.findOne(id);
    }

    /**
     * @route DELETE /address_type/:id_address_type
     * @description - Delete a address type by its id.
     * @param {String} id - The id of addres type to delete.
     * @returns {Promise<object>} - An object indicating the deletion result.
     */

    @Delete(':id_address_type')
    @HttpCode(HttpStatus.OK)
    @ApiParam({
        name: 'id_address_type',
        type: String,
    })
    @ApiOkResponse({
        status: HttpStatus.OK,
        description: 'address Type delete successfully',
    })
    async delete(@Param('id_address_type', ParseUUIDPipe) id: string): Promise<object> {
        return await this.addressService.delete(id);
    }
}
