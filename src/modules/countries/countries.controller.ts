import {
    Controller,
    Get,
    Query,
    HttpStatus,
    HttpCode,
    Post,
    Body,
    Patch,
    Param,
    ParseUUIDPipe,
    Delete,
} from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiParam } from '@nestjs/swagger';

import { PaginationResponse, PaginationResponseDto } from '@utils/dto/pagination-response.dto';
import { PaginationQueryDto } from '@utils/dto/pagination.dto';

import { CountriesService } from './countries.service';
import { Country } from './dto/country';
//import { CreateCountryDto } from './dto/create.dto';
import { CreateCountryDto as createDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

/**
 * @fileoverview
 * This file defines the `CountriesController`, which handles HTTP requests related to countries.
 *
 * @module
 * @description
 * The `CountriesController` is responsible for handling requests to find and retrieve country information.
 */
@ApiTags('Countries')
@Controller()
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) {}

    /***
     * Find all countries
     *
     * @param {PaginationQueryDto} query - The pagination query parameters.
     * @returns {Promise<PaginationResponseDto<Country>>} A promise that resolves to a paginated response of countries.
     *
     * @example
     * GET /v1/countries?page=1&limit=10
     *
     * @description
     * This endpoint allows the client to retrieve a paginated list of countries.
     *
     * @see PaginationQueryDto
     * @see PaginationResponseDto
     * @see Country
     */

    @Get('findall')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: PaginationResponse(Country) })
    async findAll(@Query() query: PaginationQueryDto): Promise<PaginationResponseDto<Country>> {
        const get_all = await this.countriesService.findAll(query);

        return get_all;
    }

    /**
     * @route POST /country/create
     * @description Create a new country.
     * @param {CountryDto} createDto - The data required to create a new country.
     * @returns {Promise<Country>} The created country object.
     */

    @Post('create')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: Country, description: 'Create Country' })
    async create(@Body() createDto: createDto): Promise<Country> {
        return await this.countriesService.create(createDto);
    }

    /**
     * @route PATCH /updatebyid/:id_country
     * @description Update an existing Country by its ID.
     * @param {string} id - The ID of the Country to be updated.
     * @param {UpdateDto} updateDto - The data to update the Country with.
     * @returns {Promise<Country | null>} The updated Country object or null if not found.
     */

    @Patch('updatebyid/:id_country')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_country', type: String })
    @ApiOkResponse({
        type: Country,
        description: 'Update Country',
    })
    async update(
        @Param('id_country', ParseUUIDPipe) id: string,
        @Body() updateDto: UpdateDto
    ): Promise<Country | null> {
        const updated = await this.countriesService.update(id, updateDto);
        return updated;
    }
    /**
     * @route DELETE /deletebyid/:id_country
     * @description Delete a country by its ID.
     * @param {string} id - The ID of the country to be deleted.
     * @returns {Promise<object>} An object indicating the deletion result.
     */

    @Delete(`deletebyid/:id_country`)
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_country', type: String })
    @ApiOkResponse({
        status: HttpStatus.OK,
        description: `Country has been successfully deleted.`,
    })
    async delete(@Param('id_country', ParseUUIDPipe) id: string): Promise<object> {
        const deleted = await this.countriesService.delete(id);
        return deleted;
    }

    // @Get('v1/country')
}

// import { Controller, Get, Query, HttpStatus, HttpCode } from '@nestjs/common';
// import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

// import {
//     InfinityPaginationResponse,
//     InfinityPaginationResponseDto,
// } from '@utils/dto/infinity-pagination-response.dto';
// import { infinityPagination } from '@utils/infinity-pagination';

// import { CountriesService } from './countries.service';
// import { Country } from './domain/country';
// import { QueryCountryDto } from './dto/query-country.dto';

// @ApiTags('Countries')
// @Controller()
// export class CountriesController {
//     constructor(private readonly countriesService: CountriesService) {}

//     /***
//      * Find all countries
//      */

//     @Get('v1/countries')
//     @HttpCode(HttpStatus.OK)
//     @ApiOkResponse({
//         type: InfinityPaginationResponse(Country),
//     })
//     async findAll(
//         @Query() query: QueryCountryDto
//     ): Promise<InfinityPaginationResponseDto<Country>> {
//         console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHA');
//         const page = query?.page ?? 1;
//         let limit = query?.limit ?? 10;
//         if (limit > 50) {
//             limit = 50;
//         }

//         return infinityPagination(
//             await this.countriesService.findManyWithPagination({
//                 filterOptions: query?.filters,
//                 sortOptions: query?.sort,
//                 paginationOptions: {
//                     page,
//                     limit,
//                 },
//             }),
//             { page, limit }
//         );
//     }
// }

// import { Controller, Get, Query, HttpStatus, HttpCode } from '@nestjs/common';
// import { ApiTags, ApiOkResponse, ApiQuery } from '@nestjs/swagger';

// // import {
// //     InfinityPaginationResponse,
// //     InfinityPaginationResponseDto,
// // } from '@utils/dto/infinity-pagination-response.dto';
// // import { infinityPagination } from '@utils/infinity-pagination';

// import { ApiFilterQuery } from '@decorators/api.filter.query';
// import {
//     PaginationQueryDto,
//     PaginatedResultDto,
//     FilterQueryDto,
//     // ApiFilterQuery,
// } from '@utils/dto/pagination.dto';

// // import { ApiNestedQuery } from '../../decorators/api-filter-query';

// import { CountriesService } from './countries.service';
// import { Country } from './domain/country';
// // import { QueryCountryDto } from './dto/query-country.dto';

// @ApiTags('Countries')
// @Controller()
// export class CountriesController {
//     constructor(private readonly countriesService: CountriesService) {}

//     /***
//      * Find all countries
//      */

//     @Get('v1/countries')
//     @HttpCode(HttpStatus.OK)
//     // @ApiQuery({
//     //     name: 'filters',
//     //     required: false,
//     //     type: String,
//     //     description: 'Array of filter objects as a JSON string',
//     //     example:
//     //         '[{"field":"name","operator":"LIKE","value":"John"},{"field":"age","operator":">","value":"30"}]',
//     // })
//     // @ApiQuery({
//     //     name: 'sort',
//     //     required: false,
//     //     type: String,
//     //     description: 'Array of sort objects as a JSON string',
//     //     example: '[{"field":"name","direction":"ASC"},{"field":"age","direction":"DESC"}]',
//     // })
//     // @ApiFilterQuery('filters', FilterQueryDto, 0)
//     // @ApiFilterQuery('filters', FilterQueryDto, 1)
//     @ApiOkResponse({ type: PaginatedResultDto })
//     async findAll(
//         @Query() paginationQuery: PaginationQueryDto
//     ): Promise<PaginatedResultDto<Country>> {
//         return this.countriesService.findAll(paginationQuery);
//     }
// }

// // import { Controller, Get, Query, HttpStatus, HttpCode } from '@nestjs/common';
// // import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

// // import {
// //     InfinityPaginationResponse,
// //     InfinityPaginationResponseDto,
// // } from '@utils/dto/infinity-pagination-response.dto';
// // import { infinityPagination } from '@utils/infinity-pagination';

// // import { CountriesService } from './countries.service';
// // import { Country } from './domain/country';
// // import { QueryCountryDto } from './dto/query-country.dto';

// // @ApiTags('Countries')
// // @Controller()
// // export class CountriesController {
// //     constructor(private readonly countriesService: CountriesService) {}

// //     /***
// //      * Find all countries
// //      */

// //     @Get('v1/countries')
// //     @HttpCode(HttpStatus.OK)
// //     @ApiOkResponse({
// //         type: InfinityPaginationResponse(Country),
// //     })
// //     async findAll(
// //         @Query() query: QueryCountryDto
// //     ): Promise<InfinityPaginationResponseDto<Country>> {
// //         console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHA');
// //         const page = query?.page ?? 1;
// //         let limit = query?.limit ?? 10;
// //         if (limit > 50) {
// //             limit = 50;
// //         }

// //         return infinityPagination(
// //             await this.countriesService.findManyWithPagination({
// //                 filterOptions: query?.filters,
// //                 sortOptions: query?.sort,
// //                 paginationOptions: {
// //                     page,
// //                     limit,
// //                 },
// //             }),
// //             { page, limit }
// //         );
// //     }
// // }
