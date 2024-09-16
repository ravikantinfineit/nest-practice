import { Module } from '@nestjs/common';

import { CountryController } from './country_mas.controller';
import { CountriesService } from './country_mas.service';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `CountryMasModule`, which bundles the `CountryController` and `CountriesService` together.
 *
 * @module
 * @description
 * The `CountryMasModule` is responsible for handling country-related operations. It provides the necessary controllers and services to manage countries.
 */
@Module({
    controllers: [CountryController],
    providers: [CountriesService, Query],
    exports: [CountriesService],
})
export class CountryMasModule {}
