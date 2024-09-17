import { Module } from '@nestjs/common';

import { BankController } from './bank.controller';
import { BankService } from './bank.service';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `BankModule`, which bundles the `BankController` and `BankService` together.
 *
 * @module
 * @description
 * The `BankModule` is responsible for handling bank-related operations. It provides the necessary controllers and services to manage bank data.
 */
@Module({
    controllers: [BankController],
    providers: [BankService, Query],
    exports: [BankService],
})
export class BankModule {}
