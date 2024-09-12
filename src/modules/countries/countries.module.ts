import { Module } from '@nestjs/common';
import { ApiExtraModels } from '@nestjs/swagger';

import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create.dto';
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
@ApiExtraModels(CreateCountryDto)
export class CountriesModule {}
