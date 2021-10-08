
/*
 * @Author: PacificD
 * @Date: 2021-10-08 20:01:32
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 21:14:32
 * @Description: todo dto
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
    @ApiProperty()
    readonly content: string;

    @ApiProperty()
    readonly user: number;
}
