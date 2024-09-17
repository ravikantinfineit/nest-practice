import { Module } from '@nestjs/common';

import { DocumentController } from './documents.controller';
import { DocumentService } from './documents.service';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `DocumentModule`, which bundles the `DocumentController` and `DocumentService` together.
 *
 * @module
 * @description
 * The `DocumentModule` is responsible for handling document-related operations. It provides the necessary controllers and services to manage documents.
 */
@Module({
    controllers: [DocumentController],
    providers: [DocumentService, Query],
    exports: [DocumentService],
})
export class DocumentModule {}
