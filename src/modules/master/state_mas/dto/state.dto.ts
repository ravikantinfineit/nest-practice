import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

/**
 * @fileoverview
 * This file defines the `State` class, which represents the data structure of a country
 * entity used in the application. The `State` class is used to describe various details
 * about a State, including its identification, name, and other related attributes.
 *
 * @module
 * @description
 * The `State` class serves as a Data Transfer Object (DTO) for representing State data.
 * It includes properties such as the State's ID, name, status Each property is annotated with `@ApiResponseProperty`
 * to define its type and provide example values for API documentation purposes.
 */
export class State {
    /**
     * The unique identifier for the state.
     * @example 'f2d90547-a09a-4baa-a9f4-244e44a80875'
     */
    @ApiResponseProperty({
        type: String,
        example: 'f2d90547-a09a-4baa-a9f4-244e44a80875',
    })
    id_state: string;

    /**
     * State name.
     * @example 'Gujarat'
     */
    @ApiProperty({
        type: String,
        description: 'State name',
        example: 'Gujarat',
    })
    name: string;

    /**
     * Country ID to which the state belongs.
     * @example '3a10e186-c759-4aec-9a86-2e5e0c2e5870'
     */
    @ApiProperty({
        type: String,
        description: 'Country ID',
        example: '3a10e186-c759-4aec-9a86-2e5e0c2e5870',
    })
    country_id: string;

    /**
     * Status of the state.
     * @example 1
     */
    @ApiProperty({
        type: Number,
        description: 'Status of the state',
        example: 1,
    })
    status: number;
}
