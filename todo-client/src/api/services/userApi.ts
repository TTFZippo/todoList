/*
 * @Author: PacificD
 * @Date: 2021-10-09 21:14:18
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-10 15:11:00
 * @Description: user Api
 */
import axiosInstance from "../index";
import { IResponse } from "../types/type";
import { ILogin, IRegister } from "../types/request";
import url from '../url'

//login
export const loginAPI = (params: ILogin): Promise<any> => {
    return axiosInstance.post(url.dev + '/user/login', params);
}