/*
 * @Author: PacificD
 * @Date: 2021-10-07 20:13:10
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-07 20:30:16
 * @Description: 防抖函数
 */

/**
 * @description: 
 * @param {Function} fn
 * @param {number} waitTime
 * @return {*}
 * @author: PacificD
 */
const debounce = (fn: Function, waitTime: number): Function => {
    // 创建一个变量用来存放定时器的返回值
    var timeout: any;
    return function (): void {

        let callNow = !timeout;

        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            timeout = null;
        }, waitTime);

        if (callNow) fn();
    }
}

export default debounce;