import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * @fileoverview
 * This file defines the `Banks` class, which represents the data structure of a bank entity.
 * It includes properties that describe the bank and uses decorators for Swagger documentation.
 *
 * @module
 * @description
 * The `Banks` class is used to define the structure of a bank object, including its name, short name,
 * city, state, and country IDs, along with the status of the bank. The class uses decorators to
 * configure how the properties should be documented in the Swagger API documentation.
 */
export class Banks {
    /**
     * The unique identifier of the bank (e.g., '1a2b3c').
     * @example '1a2b3c4d-5678-90ef-1234-56789abcdef0'
     */
    @ApiResponseProperty({
        type: String,
        example: '1a2b3c4d-5678-90ef-1234-56789abcdef0',
    })
    id_bank: string;

    /**
     * The name of the bank (e.g., 'State Bank Of India').
     * @example 'State Bank Of India'
     */
    @ApiResponseProperty({
        type: String,
        example: 'State Bank Of India',
    })
    name: string;

    /**
     * The short name of the bank (e.g., 'SBI').
     * @example 'SBI'
     */
    @ApiResponseProperty({
        type: String,
        example: 'SBI',
    })
    short_name: string;

    /**
     * The ID of the city where the bank is located (optional).
     * @example '09407516-c0ac-4298-a6a7-59f48b87c094'
     */
    @ApiResponseProperty({
        type: String,
        example: '09407516-c0ac-4298-a6a7-59f48b87c094',
    })
    id_city: string | null;

    /**
     * The ID of the state where the bank is located (optional).
     * @example 'f2d90547-a09a-4baa-a9f4-244e44a80875'
     */
    @ApiResponseProperty({
        type: String,
        example: 'f2d90547-a09a-4baa-a9f4-244e44a80875',
    })
    id_state: string | null;

    /**
     * The ID of the country where the bank is located.
     * @example '3a10e186-c759-4aec-9a86-2e5e0c2e5870'
     */
    @ApiResponseProperty({
        type: String,
        example: '3a10e186-c759-4aec-9a86-2e5e0c2e5870',
    })
    id_country: string;

    /**
     * The status of the bank (e.g., 1 for active).
     * @example 1
     */
    @ApiResponseProperty({
        type: Number,
        example: 1,
    })
    status: number;
}
