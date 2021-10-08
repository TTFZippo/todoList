/*
 * @Author: PacificD
 * @Date: 2021-09-25 14:51:23
 * @LastEditors: PacificD
 * @LastEditTime: 2021-09-25 23:07:47
 * @Description: type
 */

/** xhr的响应结果 */
export interface IResponse {
    code: number | string
    data: any
    msg: string
}