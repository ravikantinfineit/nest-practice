import { ApiProperty } from '@nestjs/swagger';

import { IsDefined, IsNotEmpty, IsString, MaxLength, IsOptional, IsNumber } from 'class-validator';

/**
 * Data Transfer Object for creating a new state.
 */
export class StateDto {
    /**
     * State name.
     * @example 'California'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @ApiProperty({
        type: String,
        description: 'State name',
        example: 'California',
        maxLength: 100,
    })
    readonly name: string;

    /**
     * Country ID to which the state belongs.
     * @example 'US'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        description: 'Country ID',
        example: 'US',
    })
    readonly country_id: string;

    /**
     * Status of the state.
     * @example 1
     */
    @IsOptional()
    @IsNumber()
    @ApiProperty({
        type: Number,
        description: 'Status of the state',
        example: 1,
        default: 1,
    })
    readonly status?: number;
}
