import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

/**
 * @fileoverview
 * This file defines the `CreateDocumentDto` class, which represents the data transfer object (DTO)
 * used for creating a new document record. It includes validation rules and transformation logic
 * for the properties of the document.
 *
 * @module
 * @description
 * The `CreateDocumentDto` class ensures that the data provided for creating a document adheres to
 * specified validation rules and formats. It uses decorators from `class-validator` for validation
 * and `class-transformer` for transforming input data.
 */
export class DocumentDto {
    /**
     * The ID of the document group to which the document belongs.
     * @example '09407516-c0ac-4298-a6a7-59f48b87c094'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        description: 'Document group ID',
        example: '09407516-c0ac-4298-a6a7-59f48b87c094',
    })
    id_document_group: string;

    /**
     * The name of the document (e.g., 'Passport').
     * @example 'Passport'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        description: 'Document name',
        example: 'Passport',
        maxLength: 25,
    })
    name: string;

    /**
     * The status of the document (e.g., 1 for active).
     * @example 1
     */
    @IsOptional()
    @IsNumber()
    @ApiProperty({
        type: Number,
        description: 'Status of the document',
        example: 1,
        default: 1,
    })
    status?: number;

    /**
     * The unique identifier for the document.
     * This property is excluded from the plain representation of the object.
     */
    @Exclude({ toPlainOnly: true })
    id_document?: string;
}
