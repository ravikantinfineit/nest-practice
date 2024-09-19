import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

/**
 * @fileoverview
 * This file defines the `AddresTypeDto` class, which represents the data transfer object (DTO)
 * used for creating or updating a AddresType record. It includes validation rules and transformation logic
 * for the properties of the AddresType.
 *
 * @module
 * @description
 * The `AddresTypeDto` class ensures that the data provided for creating or updating a AddresType adheres to
 * specified validation rules and formats. It uses decorators from `class-validator` for validation
 * and `class-transformer` for transforming input data.
 */
export class AddresTypeDto {
    /**
     * The type of address (e.g., 'Office') .
     * @example '"Office"'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @ApiProperty({
        type: String,
        description: 'type of address',
        example: '"Office"',
        maxLength: 50,
    })
    address_type: string;

    /**
     * The status of the address type (optional, default is 1 for active).
     * @example 1
     */
    @IsOptional()
    @IsNumber()
    @ApiProperty({
        type: Number,
        description: 'Status of the address type (optional)',
        example: 1,
        default: 1,
    })
    status?: number;

    /**
     * The unique identifier for the address_types.
     * This property is excluded from the plain representation of the object.
     */
    @Exclude({ toPlainOnly: true })
    id_address_type?: string;
}
