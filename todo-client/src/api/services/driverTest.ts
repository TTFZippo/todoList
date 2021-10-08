/*
 * @Author: PacificD
 * @Date: 2021-09-25 14:48:54
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 22:51:13
 * @Description: test
 */
import axiosInstance from "../index";
import { IResponse } from "../types/type";
import { ITestParam } from "../../types/testType";
import url from '../url'

//获取随机题目
export const randTest = (params: ITestParam): Promise<IResponse> => {
    return axiosInstance.post(url.driverTest, params).then(res => res.data);
}