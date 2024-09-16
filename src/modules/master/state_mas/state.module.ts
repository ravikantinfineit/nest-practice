import { Module } from '@nestjs/common';

import { Query } from './query';
import { StateController } from './state.controller';
import { StateService } from './state.service';

/**
 * @fileoverview
 * This file defines the `StateModule`, which bundles the `StateController` and `StateService` together.
 *
 * @module
 * @description
 * The `StateModule` is responsible for handling state-related operations. It provides the necessary controllers and services to manage state.
 */
@Module({
    controllers: [StateController],
    providers: [StateService, Query],
    exports: [StateService],
})
export class StateModule {}
