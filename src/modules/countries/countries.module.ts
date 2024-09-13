import { Module } from '@nestjs/common';

import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `CountriesModule`, which bundles the `CountriesController` and `CountriesService` together.
 *
 * @module
 * @description
 * The `CountriesModule` is responsible for handling country-related operations. It provides the necessary controllers and services to manage countries.
 */
@Module({
    controllers: [CountriesController],
    providers: [CountriesService, Query],
    exports: [CountriesService],
})
export class CountriesModule {}
