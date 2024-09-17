import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * @fileoverview
 * This file defines the `Document` class, which represents the data structure of a document entity.
 * It includes properties that describe the document and uses decorators for Swagger documentation.
 *
 * @module
 * @description
 * The `Document` class is used to define the structure of a document object, including its ID, name, status,
 * and associated document group. The class also uses decorators to configure how the properties should be documented and transformed.
 */
export class Document {
    /**
     * The unique identifier of the document (e.g., '8e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8').
     * @example '8e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8'
     */
    @ApiResponseProperty({
        type: String,
        example: '8e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8',
    })
    id_document: string;

    /**
     * The ID of the document group to which the document belongs.
     * @example '09407516-c0ac-4298-a6a7-59f48b87c094'
     */
    @ApiResponseProperty({
        type: String,
        example: '09407516-c0ac-4298-a6a7-59f48b87c094',
    })
    id_document_group: string;

    /**
     * The name of the document (e.g., 'Passport').
     * @example 'Passport'
     */
    @ApiResponseProperty({
        type: String,
        example: 'Passport',
    })
    name: string;

    /**
     * The status of the document (e.g., 1 for active).
     * @example 1
     */
    @ApiResponseProperty({
        type: Number,
        example: 1,
    })
    status: number;
}
