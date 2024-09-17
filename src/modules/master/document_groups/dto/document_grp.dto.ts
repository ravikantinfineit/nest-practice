import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * @fileoverview
 * This file defines the `DocumentGroup` class, which represents the data structure of a document group entity.
 * It includes properties that describe the document group and uses decorators for Swagger documentation.
 *
 * @module
 * @description
 * The `DocumentGroup` class is used to define the structure of a document group object, including its name, status,
 * and timestamps. The class also uses decorators to configure how the properties should be documented and transformed.
 */
export class DocumentGroup {
    /**
     * The unique identifier of the document group (e.g., '8e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e').
     * @example '8e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8'
     */
    @ApiResponseProperty({
        type: String,
        example: '8e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8',
    })
    id_document_group: string;

    /**
     * The name of the document group (e.g., 'Legal Documents').
     * @example 'Legal Documents'
     */
    @ApiResponseProperty({
        type: String,
        example: 'Legal Documents',
    })
    name: string;

    /**
     * The status of the document group (e.g., 1 for active).
     * @example 1
     */
    @ApiResponseProperty({
        type: Number,
        example: 1,
    })
    status: number;
}
