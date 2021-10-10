/*
 * @Author: PacificD
 * @Date: 2021-10-10 14:16:36
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-10 14:16:36
 * @Description: error alert type
 */
export interface IErrorAlert {
    msg: string,
    theme: "success" | "warning" | "message" | "error" //theme enum string
}
