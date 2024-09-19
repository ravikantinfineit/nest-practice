import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString, MaxLength, IsOptional, IsNumber } from 'class-validator';

/**
 * @fileoverview
 * This file defines the `StateDto` class, which represents the data transfer object (DTO)
 * used for creating a new State record. It includes validation rules and transformation logic
 * for the properties of the State.
 *
 * @module
 * @description
 * The `StateDto` class ensures that the data provided for creating a State adheres to
 * specified validation rules and formats. It uses decorators from `class-validator` for validation
 * and `class-transformer` for transforming input data.
 */

export class StateDto {
    /**
     * State name.
     * @example 'Gujarat'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @ApiProperty({
        type: String,
        description: 'State name',
        example: 'Gujarat',
        maxLength: 100,
    })
    name: string;

    /**
     * Country ID to which the state belongs.
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
     * Status of the state.
     * @example 1
     */
    @IsOptional()
    @IsNumber()
    @ApiProperty({
        type: Number,
        description: 'Status of the state',
        example: 1,
        default: 1,
    })
    status?: number;

    /**
     * The unique identifier for the state.
     * This property is excluded from the plain representation of the object.
     */
    @Exclude({ toPlainOnly: true })
    id_state?: string;

    @Exclude({ toPlainOnly: true })
    updated_at?: string;
}
