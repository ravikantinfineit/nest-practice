import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';

/**
 * @fileoverview
 * This file defines the `Country` class, which represents the data structure of a country entity.
 * It includes properties that describe the country and uses decorators for Swagger documentation
 * and data transformation.
 *
 * @module
 * @description
 * The `Country` class is used to define the structure of a country object, including its code, name,
 * official name, native name, capital, and currency code. The class also uses decorators
 * to configure how the properties should be documented and transformed.
 */
export class Country {
    /**
     * The code of the country (ISO 3166-1 alpha-2).
     * @example 'IN'
     */
    @ApiProperty({
        type: String,
        description: 'Country Code (ISO 3166-1 alpha-2)',
        example: 'IN',
    })
    code: string;

    /**
     * The name of the country.
     * @example 'India'
     */
    @ApiProperty({
        type: String,
        description: 'Name of the country',
        example: 'India',
    })
    name: string;

    /**
     * The official name of the country.
     * @example 'Republic of India'
     */
    @ApiProperty({
        type: String,
        description: 'Official name of the country',
        example: 'Republic of India',
    })
    official_name: string;

    /**
     * The native name of the country, in its local language.
     * @example 'भारत'
     */
    @ApiProperty({
        type: String,
        description: 'Native name of the country',
        example: 'भारत',
    })
    native_name: string;

    /**
     * The capital city of the country.
     * @example 'New Delhi'
     */
    @ApiProperty({
        type: String,
        description: 'Capital city of the country',
        example: 'New Delhi',
    })
    capital: string;

    /**
     * The currency code associated with the country (ISO 4217 currency code).
     * @example 'INR'
     */
    @ApiProperty({
        type: String,
        description: 'Currency code of the country (ISO 4217)',
        example: 'INR',
    })
    currency_code: string;

    /**
     * The unique identifier for the country.
     * This property is excluded from the plain representation of the object.
     */
    @Exclude({ toPlainOnly: true })
    id?: string;
}
