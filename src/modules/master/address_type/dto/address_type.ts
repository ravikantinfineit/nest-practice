/**
 * @fileoverview
 * This file defines the `AddressType` class, which represents the data structure of a AddressType entity.
 * It includes properties that describe the AddressType and uses decorators for Swagger documentation.
 *
 * @module
 * @description
 * The `AddressType` class is used to define the structure of a AddressType object, including its addres_type, status,
 * id_addres_type, along with the status of the AddressType. The class uses decorators to
 * configure how the properties should be documented in the Swagger API documentation.
 */

import { ApiResponseProperty } from '@nestjs/swagger';

export class AddressType {
    /**
     * The unique identifier of the AddressType (e.g., '1a2b3c').
     * @example '1a2b3c4d-5678-90ef-1234-56789abcdef0'
     */
    @ApiResponseProperty({
        type: String,
        example: '1a2b3c4d-5678-90ef-1234-56789abcdef0',
    })
    id_address_type: string;

    /**
     * The address_type of the AddressType (e.g., 'Office').
     * @example 'Office'
     */
    @ApiResponseProperty({
        type: String,
        example: 'Office',
    })
    address_type: string;

    /**
     * The status of the AddressType (e.g., 1 for active).
     * @example 1
     */
    @ApiResponseProperty({
        type: Number,
        example: 1,
    })
    status: number;
}
