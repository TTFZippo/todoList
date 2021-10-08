/*
 * @Author: PacificD
 * @Date: 2021-09-25 14:19:31
 * @LastEditors: PacificD
 * @LastEditTime: 2021-09-25 14:59:37
 * @Description: axios底层封装
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { showMessage } from "./status"

const axiosInstance: AxiosInstance = axios.create({
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    },
    // 是否跨站点访问控制请求
    withCredentials: true,
    timeout: 30000,
    transformRequest: [(data) => {
        data = JSON.stringify(data)
        return data
    }],
})

// axios实例拦截响应
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.headers.authorization) {
            sessionStorage.setItem('token', response.headers.authorization);
        } else {
            if (response.data && response.data.token) {
                sessionStorage.setItem('token', response.data.token);
            }
        }

        if (response.status === 200) {
            return response;
        } else {
            showMessage("response.status")
            return response;
        }
    },
    // 请求失败
    (error: any) => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            showMessage("response.status")
            return Promise.reject(response.data);
        } else {
            showMessage("网络连接异常,请稍后再试!")
        }
    }
);

// axios实例拦截请求
axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // const { user } = store.state
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`
        // }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
)

export default axiosInstance