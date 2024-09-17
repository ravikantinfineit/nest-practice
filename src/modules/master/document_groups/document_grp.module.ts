import { Module } from '@nestjs/common';

import { DocumentGroupController } from './document_grp.controller';
import { DocumentGroupService } from './document_grp.service';
import { Query } from './query';

/**
 * @fileoverview
 * This file defines the `DocumentGroupModule`, which bundles the `DocumentGroupController` and `DocumentGroupService` together.
 *
 * @module
 * @description
 * The `DocumentGroupModule` is responsible for handling document group-related operations. It provides the necessary controllers and services to manage document groups.
 */
@Module({
    controllers: [DocumentGroupController],
    providers: [DocumentGroupService, Query],
    exports: [DocumentGroupService],
})
export class DocumentGroupModule {}
