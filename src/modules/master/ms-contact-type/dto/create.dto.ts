import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class ContactDto {
    /**
     * Contact Type name.
     * @example 'Email'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @ApiProperty({
        type: String,
        description: 'Contact Type name',
        example: 'Email',
        maxLength: 100,
    })
    contact_type: string;

    /**
     * Status of the Contact Type.
     * @example 1
     */
    @IsOptional()
    @IsNumber()
    @ApiProperty({
        type: Number,
        description: 'Status of the Contact Type',
        example: 1,
        default: 1,
    })
    status?: number;

    /**
     * The unique identifier for the Contact Type.
     * This property is excluded from the plain representation of the object.
     */
    @Exclude({ toPlainOnly: true })
    id_address_type?: string;
}
