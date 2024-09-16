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

import { CityService } from './cities.service';
import { Cities } from './dto/cities.dto';
import { CityDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@ApiTags('Cities')
@Controller('cities')
export class CityController {
    constructor(private readonly cityService: CityService) {}

    /**
     * @route POST /cities
     * @description Create a new city.
     * @param {CreateCityDto} createDto - The data required to create a new city.
     * @returns {Promise<Cities>} The created city object.
     */
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({
        type: Cities,
        description: 'Create city',
    })
    async create(@Body() createDto: CityDto): Promise<Cities> {
        return this.cityService.create(createDto);
    }

    /**
     * @route PATCH /cities/:id_city
     * @description Update an existing city by its ID.
     * @param {string} id - The ID of the city to be updated.
     * @param {UpdateDto} updateDto - The data to update the city with.
     * @returns {Promise<Cities | null>} The updated city object or null if not found.
     */
    @Patch(':id_city')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_city', type: String })
    @ApiOkResponse({
        type: Cities,
        description: 'Update City',
    })
    async update(
        @Param('id_city', ParseUUIDPipe) id: string,
        @Body() updateDto: UpdateDto
    ): Promise<Cities | null> {
        return this.cityService.update(id, updateDto);
    }

    /**
     * @route GET /cities
     * @description Retrieve a list of cities with pagination.
     * @param {PaginationQueryDto} query - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<Cities>>} A paginated list of cities.
     */
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: PaginationResponse(Cities) })
    async findAll(@Query() query: PaginationQueryDto): Promise<PaginationResponseDto<Cities>> {
        return this.cityService.findAll(query);
    }

    /**
     * @route GET /cities/:id_city
     * @description Retrieve a single city by its ID.
     * @param {string} id - The ID of the city to retrieve.
     * @returns {Promise<Cities>} The city object.
     */
    @Get(':id_city')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_city', type: String })
    @ApiOkResponse({
        type: Cities,
        description: 'Get City by ID',
    })
    async findOne(@Param('id_city', ParseUUIDPipe) id: string): Promise<Cities> {
        return this.cityService.findOne(id);
    }

    /**
     * @route DELETE /cities/:id_city
     * @description Delete a city by its ID.
     * @param {string} id - The ID of the city to delete.
     * @returns {Promise<object>} An object indicating the deletion result.
     */
    @Delete(':id_city')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_city', type: String })
    @ApiOkResponse({
        status: HttpStatus.OK,
        description: 'City has been successfully deleted.',
    })
    async delete(@Param('id_city', ParseUUIDPipe) id: string): Promise<object> {
        return this.cityService.delete(id);
    }
}
