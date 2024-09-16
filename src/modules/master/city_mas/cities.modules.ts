import { Module } from '@nestjs/common';

import { CityController } from './cities.controller';
import { CityService } from './cities.service';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `CityModule`, which bundles the `CityController` and `CityService` together.
 *
 * @module
 * @description
 * The `CityModule` is responsible for handling city-related operations. It provides the necessary controllers and services to manage City.
 */
@Module({
    controllers: [CityController],
    providers: [CityService, Query],
    exports: [CityService],
})
export class CityModule {}
