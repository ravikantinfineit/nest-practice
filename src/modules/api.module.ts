import { Module } from '@nestjs/common';
import { APP_FILTER, RouterModule } from '@nestjs/core';

import { HttpErrorFilter } from '@core/exceptions/http-error.filter';

import { CountriesModule } from './countries/countries.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { FilesModule } from './files/files.module';
import { HomeModule } from './home/home.module';
import { CityModule } from './master/city_mas/cities.modules';
import { CountryMasModule } from './master/country_mas/country_mas.module';
import { StateModule } from './master/state_mas/state.module';

/**
 * @fileoverview
 * This file contains the `ApiModule` class, which aggregates several feature modules and sets up a global HTTP error filter.
 *
 * @module
 * @description
 * The `ApiModule` class is responsible for importing feature-specific modules and configuring a global HTTP error filter.
 * It serves as an aggregate module for the API-related functionalities of the application.
 */

@Module({
    imports: [
        /**
         * Module responsible for managing country-related functionalities.
         */
        CountriesModule,

        /**
         * Module responsible for managing currency-related functionalities.
         */
        CurrenciesModule,

        /**
         * Module responsible for managing file-related functionalities.
         */
        FilesModule,

        /**
         * Module responsible for managing home-related functionalities.
         */
        HomeModule,
        RouterModule.register([
            {
                path: 'v1',
                module: CountriesModule,
            },
        ]),
        RouterModule.register([
            {
                path: 'v1',
                module: CurrenciesModule,
            },
        ]),
        /**
         * Module responsible for managing country-related functionalities.
         */
        CountryMasModule,

        /**
         * Module responsible for managing city-related functionalities.
         */
        CityModule,

        /**
         * Module responsible for managing state-related functionalities.
         */
        StateModule,
    ],

    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpErrorFilter,
        },
    ],
})
export class ApiModule {}
