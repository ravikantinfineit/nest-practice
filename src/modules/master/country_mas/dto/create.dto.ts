import { ApiProperty } from '@nestjs/swagger';

import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { upperCaseTransformer } from '@utils/transformers/upper-case.transformer';

/**
 * @fileoverview
 * This file defines the `CreateCountryDto` class, which represents the data transfer object (DTO)
 * used for creating a new country record. It includes validation rules and transformation logic
 * for the properties of the country.
 *
 * @module
 * @description
 * The `CreateCountryDto` class ensures that the data provided for creating a country adheres to
 * specified validation rules and formats. It uses decorators from `class-validator` for validation
 * and `class-transformer` for transforming input data.
 */

export class CountryDto {
    /**
     * Country code, which must be uppercase and 2 characters long (ISO 3166-1 alpha-2).
     * @example 'IN'
     */

    @Transform(upperCaseTransformer)
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(2)
    @ApiProperty({
        type: String,
        description: 'Country code (ISO 3166-1 alpha-2)',
        example: 'IN',
        maxLength: 2,
    })
    readonly code: string;

    /**
     * Name of the country.
     * @example 'India'
     */

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(80)
    @ApiProperty({
        type: String,
        description: 'Name of the country',
        example: 'India',
        maxLength: 80,
    })
    name: string;

    /**
     * Official name of the country.
     * @example 'Republic of India'
     */

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @ApiProperty({
        type: String,
        description: 'Official name of the country',
        example: 'Republic of India',
        maxLength: 100,
    })
    official_name: string;

    /**
     * Native name of the country, in its local language.
     * @example 'भारत'
     */

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @ApiProperty({
        type: String,
        description: 'Native name of the country',
        example: 'भारत',
        maxLength: 100,
    })
    native_name: string;

    /**
     * Capital city of the country.
     * @example 'New Delhi'
     */

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @ApiProperty({
        type: String,
        description: 'Capital city of the country',
        example: 'New Delhi',
        maxLength: 100,
    })
    capital: string;

    /**
     * Currency code associated with the country (ISO 4217 currency code).
     * @example 'INR'
     */

    @Transform(upperCaseTransformer)
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(3)
    @ApiProperty({
        type: String,
        description: 'Currency code of the country (ISO 4217)',
        example: 'INR',
        maxLength: 3,
    })
    currency_code: string;
}
