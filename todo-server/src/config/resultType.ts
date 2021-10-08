/*
 * @Author: PacificD
 * @Date: 2021-10-08 19:16:47
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 19:49:37
 * @Description: result type 
 */
export enum stateCode {
    OK = 200,
    UNEXPECT = 400, //未知错误
    NEED_AUTH = 401, //需要登录
    NO_FIND = 402, //找不到相关资源
    SEVER_ERR = 500, //服务器错误
}

export class Result {
    constructor(private code: stateCode,
        private data: Object | Array<any> | string,
        private msg: string) { }

    public static success(data: Object | Array<any> | string) {
        return new Result(200, data, "success");
    }

    public static fail(code: stateCode, msg: string) {
        return new Result(code, '', msg);
    }
}