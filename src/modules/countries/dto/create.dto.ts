import { ApiProperty } from '@nestjs/swagger';

import { Exclude, Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { upperCaseTransformer } from '@app/utils/transformers/upper-case.transformer';

/**
 * @fileoverview
 * This file defines the `CountryDto` class, which represents the data transfer object (DTO)
 * used for creating a new Country record. It includes validation rules and transformation logic
 * for the properties of the Country.
 *
 * @module
 * @description
 * The `CountryDto` class ensures that the data provided for creating a Country adheres to
 * specified validation rules and formats. It uses decorators from `class-validator` for validation
 * and `class-transformer` for transforming input data.
 */
export class CreateDto {
    /**
     * The name of the country.
     *
     * @type {string}
     * @example 'India'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        example: 'India',
    })
    name: string;

    /**
     * The ISO 3166-1 alpha-2 code of the country.
     *
     * @type {string}
     * @example 'IN'
     */
    @Transform(upperCaseTransformer)
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(2)
    @ApiProperty({
        type: String,
        example: 'IN',
    })
    iso: string;

    /**
     * The nice name of the country.
     *
     * @type {string}
     * @example 'India'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        example: 'India',
    })
    nice_name: string;

    /**
     * The ISO 3166-1 alpha-3 code of the country.
     *
     * @type {string}
     * @example 'IND'
     */
    @Transform(upperCaseTransformer)
    @IsNotEmpty()
    @IsString()
    @MaxLength(3)
    @ApiProperty({
        type: String,
        example: 'IND',
    })
    iso3: string;

    /**
     * The international  code for the country.
     *
     * @type {string}
     * @example '91'
     */
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        example: '91',
    })
    num_code: string;

    /**
     * The international dialing code for the country.
     *
     * @type {string}
     * @example '91'
     */
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        example: '91',
    })
    dial_code: string;

    /**
     * The continent where the country is located.
     *
     * @type {string}
     * @example 'Asia'
     */

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        example: 'Asia',
    })
    continent: string;

    /**
     * The capital city of the country.
     *
     * @type {string}
     * @example 'New Delhi'
     */

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        example: 'New Delhi',
    })
    capital: string;

    /**
     * The unique identifier for the currency.
     *
     * @type {string}
     * @example '123e4567-e89b-12d3-a456-426614174000'
     */

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    id_currency: string;

    /**
     * The unique identifier for the timezone.
     *
     * @type {string}
     * @example '80d3aa38-6b64-424a-a95b-383e6490f5d5'
     */

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        example: '80d3aa38-6b64-424a-a95b-383e6490f5d5',
    })
    id_timezone: string;

    @Exclude({ toPlainOnly: true })
    id_country?: string;
}
