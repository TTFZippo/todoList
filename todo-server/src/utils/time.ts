/*
 * @Author: PacificD
 * @Date: 2021-10-08 20:29:14
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 20:31:06
 * @Description: time util
 */
function getTime(): string {
    let date = new Date();
    let year = date.getFullYear();
    let month: number | string = date.getMonth() + 1;
    let day: number | string = date.getDate();
    let Hours = date.getHours();
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    let time = year + '-' + month + '-' + day + ' ' + Hours + ':' + Minutes + ':' + Seconds;
    return time;
}

export default getTime;