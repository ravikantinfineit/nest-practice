import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';
import {
    IsDefined,
    IsNotEmpty,
    IsString,
    MaxLength,
    IsOptional,
    IsNumber,
    IsUUID,
} from 'class-validator';

/**
 * @fileoverview
 * This file defines the `BankDto` class, which represents the data transfer object (DTO)
 * used for creating or updating a bank record. It includes validation rules and transformation logic
 * for the properties of the bank.
 *
 * @module
 * @description
 * The `BankDto` class ensures that the data provided for creating or updating a bank adheres to
 * specified validation rules and formats. It uses decorators from `class-validator` for validation
 * and `class-transformer` for transforming input data.
 */
export class BankDto {
    /**
     * The name of the bank (e.g., 'State Bank Of India').
     * @example 'State Bank Of India'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @ApiProperty({
        type: String,
        description: 'Bank name',
        example: 'State Bank Of India',
        maxLength: 50,
    })
    name: string;

    /**
     * The short name of the bank (optional, e.g., 'SBI').
     * @example 'SBI'
     */
    @IsOptional()
    @IsString()
    @MaxLength(5)
    @ApiProperty({
        type: String,
        description: 'Short name of the bank (optional)',
        example: 'SBI',
        maxLength: 5,
        required: false,
    })
    short_name?: string;

    /**
     * The ID of the city where the bank is located (optional).
     * @example 'a12b34cd-5678-90ef-1234-56789abcdef0'
     */
    @IsOptional()
    @IsUUID()
    @ApiProperty({
        type: String,
        description: 'City ID (optional)',
        example: 'a12b34cd-5678-90ef-1234-56789abcdef0',
        required: false,
    })
    id_city?: string;

    /**
     * The ID of the state where the bank is located (optional).
     * @example 'b23c45de-6789-01gh-2345-67890abcdef1'
     */
    @IsOptional()
    @IsUUID()
    @ApiProperty({
        type: String,
        description: 'State ID (optional)',
        example: 'b23c45de-6789-01gh-2345-67890abcdef1',
        required: false,
    })
    id_state?: string;

    /**
     * The ID of the country where the bank is located.
     * @example 'c34d56ef-7890-12ij-3456-78901abcdef2'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({
        type: String,
        description: 'Country ID',
        example: 'c34d56ef-7890-12ij-3456-78901abcdef2',
    })
    id_country: string;

    /**
     * The status of the bank (optional, default is 1 for active).
     * @example 1
     */
    @IsOptional()
    @IsNumber()
    @ApiProperty({
        type: Number,
        description: 'Status of the bank (optional)',
        example: 1,
        default: 1,
    })
    status?: number;

    /**
     * The unique identifier for the bank.
     * This property is excluded from the plain representation of the object.
     */
    @Exclude({ toPlainOnly: true })
    id_bank?: string;

    @Exclude({ toPlainOnly: true })
    updated_at?: string;
}
