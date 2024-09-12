import { PartialType } from '@nestjs/swagger';

import { CreateCountryDto } from './create.dto';

export class UpdateDto extends PartialType(CreateCountryDto) {}
