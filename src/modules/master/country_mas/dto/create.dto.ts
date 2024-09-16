import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator';

/**
 * @fileoverview
 * This file defines the `CountryDto` class, which represents the data transfer object (DTO)
 * used for creating a new country record. It includes validation rules and transformation logic
 * for the properties of the country.
 *
 * @module
 * @description
 * The `CountryDto` class ensures that the data provided for creating a country adheres to
 * specified validation rules and formats. It uses decorators from `class-validator` for validation
 * and `class-transformer` for transforming input data.
 */

export class CountryDto {
    /**
     * Country Dial Code, which must be uppercase and 5 characters long
     * @example '+91'
     */

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(5)
    @ApiProperty({
        type: String,
        description: 'Country Dial Code',
        example: '+91',
        maxLength: 5,
    })
    dial_code: string;

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
     * The unique identifier for the country.
     * This property is excluded from the plain representation of the object.
     */
    @Exclude({ toPlainOnly: true })
    id_country?: string;
}
