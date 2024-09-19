import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString, MaxLength, IsOptional, IsNumber } from 'class-validator';

/**
 * @fileoverview
 * This file defines the `CityDto` class, which represents the data transfer object (DTO)
 * used for creating a new city record. It includes validation rules and transformation logic
 * for the properties of the city.
 *
 * @module
 * @description
 * The `CityDto` class ensures that the data provided for creating a city adheres to
 * specified validation rules and formats. It uses decorators from `class-validator` for validation
 * and `class-transformer` for transforming input data.
 */

export class CityDto {
    /**
     * The name of the city (e.g., 'Surat').
     * @example 'Surat'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    @ApiProperty({
        type: String,
        description: 'City name',
        example: 'Surat',
        maxLength: 20,
    })
    name: string;

    /**
     * The ID of the state to which the city belongs.
     * @example '09407516-c0ac-4298-a6a7-59f48b87c094'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        description: 'State ID',
        example: '09407516-c0ac-4298-a6a7-59f48b87c094',
    })
    id_state: string;

    /**
     * The ID of the Country to which the city belongs.
     * @example 'f2d90547-a09a-4baa-a9f4-244e44a80875'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        description: 'Country ID',
        example: 'f2d90547-a09a-4baa-a9f4-244e44a80875',
    })
    id_country: string;

    /**
     * The status of the city (e.g., 1 for active).
     * @example 1
     */
    @IsOptional()
    @IsNumber()
    @ApiProperty({
        type: Number,
        description: 'Status of the city',
        example: 1,
        default: 1,
    })
    status?: number;

    /**
     * The unique identifier for the city.
     * This property is excluded from the plain representation of the object.
     */
    @Exclude({ toPlainOnly: true })
    id_city?: string;

    @Exclude({ toPlainOnly: true })
    updated_at?: string;
}
