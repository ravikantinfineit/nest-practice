//import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';

import { BankDto } from './create.dto';

/**
 * @fileoverview
 * This file defines the `UpdateDto` class, which represents the Data Transfer Object (DTO)
 * used for updating an existing Bank entity. It extends from the `BankDto` class,
 * making all fields optional for the update operation.
 *
 * @module
 * @description
 * The `UpdateDto` class is used to define the structure of the data required to update
 * an existing Bank entity. It inherits all properties from the `BankDto` class but
 * makes them optional, allowing partial updates.
 */
export class BankUpdateDto extends PartialType(BankDto) {}
