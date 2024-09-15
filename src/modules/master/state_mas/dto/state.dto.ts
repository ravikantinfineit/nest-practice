import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';

/**
 * Data Transfer Object for state response.
 */
export class State {
    /**
     * State ID.
     * @example 'CA'
     */
    @ApiProperty({
        type: String,
        description: 'State ID',
        example: 'CA',
    })
    id: string;

    /**
     * State name.
     * @example 'California'
     */
    @ApiProperty({
        type: String,
        description: 'State name',
        example: 'California',
    })
    name: string;

    /**
     * Country ID to which the state belongs.
     * @example 'US'
     */
    @ApiProperty({
        type: String,
        description: 'Country ID',
        example: 'US',
    })
    country_id: string;

    /**
     * Status of the state.
     * @example 1
     */
    @ApiProperty({
        type: Number,
        description: 'Status of the state',
        example: 1,
    })
    status: number;

    /**
     * The unique identifier for the state.
     * This property is excluded from the plain representation of the object.
     */
    @Exclude({ toPlainOnly: true })
    id_state?: string;
}
