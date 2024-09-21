import { PartialType } from '@nestjs/swagger';

import { AddresTypeDto } from './create.dto';
/**
 * @fileoverview
 * This file defines the `UpdateDto` class, which represents the Data Transfer Object (DTO)
 * used for updating an existing Address Type entity. It extends from the `AddresTypeDto` class,
 * making all fields optional for the update operation.
 *
 * @module
 * @description
 * The `UpdateDto` class is used to define the structure of the data required to update
 * an existing Address Type entity. It inherits all properties from the `AddresTypeDto` class but
 * makes them optional, allowing partial updates.
 */

export class AddressUpdateDto extends PartialType(AddresTypeDto) {}
