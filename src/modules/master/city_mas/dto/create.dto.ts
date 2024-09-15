import { ApiProperty } from '@nestjs/swagger';

import { IsDefined, IsNotEmpty, IsString, MaxLength, IsOptional, IsNumber } from 'class-validator';

/**
 * Data Transfer Object for creating a new city.
 */
export class CityDto {
    /**
     * The name of the city (e.g., 'San Francisco').
     * @example 'San Francisco'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @ApiProperty({
        type: String,
        description: 'City name',
        example: 'San Francisco',
        maxLength: 100,
    })
    readonly name: string;

    /**
     * The ID of the state to which the city belongs (e.g., 'CA').
     * @example 'CA'
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        description: 'State ID',
        example: 'CA',
    })
    readonly state_id: string;

    /**
     * The status of the city (e.g., 1 for active).
     * @example 1
     */
    @IsOptional()
    @IsNumber()
    @ApiProperty({
        type: Number,
        description: 'Status of the city',
        example: 1,
        default: 1,
    })
    readonly status?: number;
}
