import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * @fileoverview
 * This file defines the `Country` class, which represents the data structure of a country entity.
 * It includes properties that describe the country and uses decorators for Swagger documentation.
 *
 * @module
 * @description
 * The `Country` class is used to define the structure of a country object, including its dial code, name, The class also uses decorators
 * to configure how the properties should be documented and transformed.
 */
export class CountryMas {
    /**
     * The unique identifier for the country.
     *
     * @type {string}
     * @example '123e4567-e89b-12d3-a456-426614174000'
     */

    @ApiResponseProperty({
        type: String,
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    id_country: string;

    /**
     * The name of the country.
     * @example 'India'
     */
    @ApiResponseProperty({
        type: String,
        example: 'India',
    })
    name: string;

    /**
     * The dial code of the country .
     * @example '+91'
     */
    @ApiResponseProperty({
        type: String,
        example: '+91',
    })
    dial_code: string;

    /**
     * The Status of the country .
     * @example 1
     */
    @ApiResponseProperty({
        type: Number,
        example: 1,
    })
    status: number;
}
