import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';

/**
 * Data Transfer Object for city response.
 */
export class Cities {
    /**
     * The unique identifier of the city (e.g., 'SF').
     * @example 'SF'
     */
    @ApiProperty({
        type: String,
        description: 'City ID',
        example: 'SF',
    })
    id: string;

    /**
     * The name of the city (e.g., 'San Francisco').
     * @example 'San Francisco'
     */
    @ApiProperty({
        type: String,
        description: 'City name',
        example: 'San Francisco',
    })
    name: string;

    /**
     * The ID of the state to which the city belongs (e.g., 'CA').
     * @example 'CA'
     */
    @ApiProperty({
        type: String,
        description: 'State ID',
        example: 'CA',
    })
    state_id: string;

    /**
     * The status of the city (e.g., 1 for active).
     * @example 1
     */
    @ApiProperty({
        type: Number,
        description: 'Status of the city',
        example: 1,
    })
    status: number;

    /**
     * The unique identifier for the city.
     * This property is excluded from the plain representation of the object.
     */
    @Exclude({ toPlainOnly: true })
    id_city?: string;
}
