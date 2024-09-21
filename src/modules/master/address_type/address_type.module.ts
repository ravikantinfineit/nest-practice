import { Module } from '@nestjs/common';

import { AddressTypeController } from './address_type.controller';
import { AddressTypeService } from './address_type.service';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `AddressTypeModule`, which bundles the `AddressTypeController` and `AddressTypeService` together.
 *
 * @module
 * @description
 * The `AddressTypeModule` is responsible for handling AddressType-related operations.
 * It provides the necessary controllers and services to manage AddressType data.
 */

@Module({
    controllers: [AddressTypeController],
    providers: [AddressTypeService, Query],
    exports: [AddressTypeService],
})
export class AddressTypeModule {}
