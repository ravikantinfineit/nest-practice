import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

/**
 * @fileoverview
 * This file defines the `CreateDocumentGroupDto` class, which represents the data transfer object (DTO)
 * used for creating a new document group record. It includes validation rules and transformation logic
 * for the properties of the document group.
 *
 * @module
 * @description
 * The `CreateDocumentGroupDto` class ensures that the data provided for creating a document group adheres to
 * specified validation rules and formats. It uses decorators from `class-validator` for validation
 * and `class-transformer` for transforming input data.
 */
export class DocumentGroupDto {
    /**
     * The name of the document group (e.g., 'Legal Documents').
     * @example 'Legal Documents'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        description: 'Document group name',
        example: 'Legal Documents',
        maxLength: 25,
    })
    name: string;

    /**
     * The status of the document group (e.g., 1 for active).
     * @example 1
     */
    @IsOptional()
    @IsNumber()
    @ApiProperty({
        type: Number,
        description: 'Status of the document group',
        example: 1,
        default: 1,
    })
    status?: number;

    /**
     * The unique identifier for the document group.
     * This property is excluded from the plain representation of the object.
     */
    @Exclude({ toPlainOnly: true })
    id_document_group?: string;
}
