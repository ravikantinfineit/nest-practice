import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ContactService } from './contact.service';
import { ContactDto as CreateDto } from './dto/create.dto';
@ApiTags('Contact')
@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}
    @Post('')
    create(@Body() createDto: CreateDto) {
        return this.contactService.create(createDto);
    }
}
