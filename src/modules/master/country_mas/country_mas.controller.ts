import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiCreatedResponse, ApiParam } from '@nestjs/swagger';

import { PaginationResponse, PaginationResponseDto } from '@utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@utils/dto/pagination.dto';

import { CountriesService } from './country_mas.service';
import { Country } from './dto/country_mas.dto';
import { CountryDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

const modules = 'countries';

/**
 * @fileoverview
 * This file defines the `CountryController`, which handles HTTP requests related to countries.
 * It provides endpoints to create, update, retrieve, and delete country records.
 *
 * @module
 * @description
 * The `CountryController` is responsible for exposing endpoints that interact with the `CountriesService`.
 * It uses various HTTP methods to manage country data and handles responses with appropriate HTTP status codes.
 */

@ApiTags('Countries')
@Controller()
export class CountryController {
    constructor(private readonly countriesService: CountriesService) {}

    /**
     * @route POST /countries
     * @description Create a new country.
     * @param {CreateCountryDto} createDto - The data required to create a new country.
     * @returns {Promise<Country>} The created country object.
     */

    @Post(`${modules}`)
    @HttpCode(HttpStatus.OK)
    @ApiCreatedResponse({
        type: Country,
        description: 'Create country',
    })
    async create(@Body() createDto: CountryDto): Promise<Country> {
        const created = await this.countriesService.create(createDto);
        return created;
    }

    /**
     * @route PATCH /countries/:id_country
     * @description Update an existing country by its ID.
     * @param {string} id - The ID of the country to be updated.
     * @param {UpdateCountryDto} updateDto - The data to update the country with.
     * @returns {Promise<Country | null>} The updated country object or null if not found.
     */

    @Patch(`${modules}/:id_country`)
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_country', type: String })
    @ApiOkResponse({
        type: Country,
        description: 'Update Country',
    })
    async update(
        @Param('id_country') id: string,
        @Body() updateDto: UpdateDto
    ): Promise<Country | null> {
        const updated = await this.countriesService.update(id, updateDto);
        return updated;
    }

    /**
     * @route GET /countries
     * @description Retrieve a list of countries with pagination.
     * @param {PaginationQueryDto} query - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<Country>>} A paginated list of countries.
     */

    @Get(`${modules}`)
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: PaginationResponse(Country) })
    async findAll(@Query() query: PaginationQueryDto): Promise<PaginationResponseDto<Country>> {
        const get_all = await this.countriesService.findAll(query);

        return get_all;
    }

    /**
     * @route DELETE /countries/:id_country
     * @description Delete a country by its ID.
     * @param {string} id - The ID of the country to be deleted.
     * @returns {Promise<object>} An object indicating the deletion result.
     */

    @Delete(`${modules}/:id_country`)
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_country', type: String })
    @ApiOkResponse({
        status: HttpStatus.OK,
        description: `${modules} has been successfully deleted.`,
    })
    async delete(@Param('id_country') id: string): Promise<object> {
        const deleted = await this.countriesService.delete(id);

        return deleted;
    }
}
