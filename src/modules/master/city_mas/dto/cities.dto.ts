import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * @fileoverview
 * This file defines the `Cities` class, which represents the data structure of a city entity.
 * It includes properties that describe the city and uses decorators for Swagger documentation.
 *
 * @module
 * @description
 * The `Cities` class is used to define the structure of a city object, including its name, state id,country id The class also uses decorators
 * to configure how the properties should be documented and transformed.
 */
export class Cities {
    /**
     * The unique identifier of the city (e.g., 'SF').
     * @example 'SF'
     */
    @ApiResponseProperty({
        type: String,
        example: '09407516-c0ac-4298-a6a7-59f48b87c094',
    })
    id_city: string;

    /**
     * The name of the city (e.g., 'Surat').
     * @example 'Surat'
     */
    @ApiResponseProperty({
        type: String,
        example: 'Surat',
    })
    name: string;

    /**
     * The ID of the state to which the city belongs.
     * @example 'f2d90547-a09a-4baa-a9f4-244e44a80875'
     */
    @ApiResponseProperty({
        type: String,
        example: 'f2d90547-a09a-4baa-a9f4-244e44a80875',
    })
    id_state: string;

    /**
     * The ID of the country to which the city belongs.
     * @example '3a10e186-c759-4aec-9a86-2e5e0c2e5870'
     */
    @ApiResponseProperty({
        type: String,
        example: '3a10e186-c759-4aec-9a86-2e5e0c2e5870',
    })
    id_country: string;

    /**
     * The status of the city (e.g., 1 for active).
     * @example 1
     */
    @ApiResponseProperty({
        type: Number,
        example: 1,
    })
    status: number;
}
