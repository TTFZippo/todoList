/*
 * @Author: PacificD
 * @Date: 2021-10-08 20:13:25
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 21:14:48
 * @Description: update todo dto
 */
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly content: string;
}
