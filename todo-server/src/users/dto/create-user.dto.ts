import { ApiProperty } from "@nestjs/swagger";

/*
 * @Author: PacificD
 * @Date: 2021-10-07 22:36:14
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 21:14:08
 * @Description: 
 */
export class CreateUserDto {
    @ApiProperty()
    readonly userName: string;

    @ApiProperty()
    readonly password: string;
}
