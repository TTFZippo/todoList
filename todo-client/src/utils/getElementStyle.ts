/*
 * @Author: PacificD
 * @Date: 2021-05-16 09:45:39
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-07 21:02:05
 * @Description: 获取元素的CSS属性Util工具类
 */


/**
 * @description: 获取元素的CSS属性Util工具类。
 *  DOMElement为dom节点对象
 *  options为配置数组，成员为需要获取的css变量。
 * @param {
 *  element: DOMElement,
 *  options: Array
 * }
 * @return {*}
 * @author: PacificD
 */
const getElementStyle = function (element: any, options: Array<string>) {
    const styleCollection = element.currentStyle || window.getComputedStyle(element, null);
    let result: any = {};
    for (let style of options) {
        if (Array.prototype.indexOf.call(styleCollection, style)) {
            result[style] = styleCollection[style];
        }
    }
    return result;
}

export default getElementStyle;