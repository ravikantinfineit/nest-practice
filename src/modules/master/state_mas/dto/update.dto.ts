import { PartialType } from '@nestjs/mapped-types';

import { StateDto } from './create.dto';

/**
 * @fileoverview
 * This file defines the `UpdateDto` class, which represents the Data Transfer Object (DTO)
 * used for updating an existing State entity. It extends from the `StateDto` class,
 * making all fields optional for the update operation.
 *
 * @module
 * @description
 * The `UpdateDto` class is used to define the structure of the data required to update
 * an existing State entity. It inherits all properties from the `StateDto` class but
 * makes them optional, allowing partial updates.
 */

export class UpdateDto extends PartialType(StateDto) {}
