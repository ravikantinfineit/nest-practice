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

import { StateDto } from './dto/create.dto';
import { State } from './dto/state.dto';
import { UpdateDto } from './dto/update.dto';
import { StateService } from './state.service';

@ApiTags('States')
@Controller('states')
export class StateController {
    constructor(private readonly stateService: StateService) {}

    /**
     * @route POST /states
     * @description Create a new state.
     * @param {CreateStateDto} createDto - The data required to create a new state.
     * @returns {Promise<StateResponseDto>} The created state object.
     */
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({
        type: State,
        description: 'Create state',
    })
    async create(@Body() createDto: StateDto): Promise<State> {
        return this.stateService.create(createDto);
    }

    /**
     * @route PATCH /states/:id_state
     * @description Update an existing state by its ID.
     * @param {string} id - The ID of the state to be updated.
     * @param {DeepPartial<StateResponseDto>} updateDto - The data to update the state with.
     * @returns {Promise<StateResponseDto | null>} The updated state object or null if not found.
     */
    @Patch(':id_state')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_state', type: String })
    @ApiOkResponse({
        type: State,
        description: 'Update State',
    })
    async update(
        @Param('id_state') id: string,
        @Body() updateDto: UpdateDto
    ): Promise<State | null> {
        return this.stateService.update(id, updateDto);
    }

    /**
     * @route GET /states
     * @description Retrieve a list of states with pagination.
     * @param {PaginationQueryDto} query - The pagination and filtering parameters.
     * @returns {Promise<PaginationResponseDto<StateResponseDto>>} A paginated list of states.
     */
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: PaginationResponse(State) })
    async findAll(@Query() query: PaginationQueryDto): Promise<PaginationResponseDto<State>> {
        return this.stateService.findAll(query);
    }

    /**
     * @route GET /states/:id_state
     * @description Retrieve a single state by its ID.
     * @param {string} id - The ID of the state to retrieve.
     * @returns {Promise<StateResponseDto>} The state object.
     */
    @Get(':id_state')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_state', type: String })
    @ApiOkResponse({
        type: State,
        description: 'Get State by ID',
    })
    async findOne(@Param('id_state') id: string): Promise<State> {
        return this.stateService.findOne(id);
    }

    /**
     * @route DELETE /states/:id_state
     * @description Delete a state by its ID.
     * @param {string} id - The ID of the state to delete.
     * @returns {Promise<object>} An object indicating the deletion result.
     */
    @Delete(':id_state')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id_state', type: String })
    @ApiOkResponse({
        status: HttpStatus.OK,
        description: 'State has been successfully deleted.',
    })
    async delete(@Param('id_state') id: string): Promise<object> {
        return this.stateService.delete(id);
    }
}
