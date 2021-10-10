/*
 * @Author: PacificD
 * @Date: 2021-10-10 13:16:52
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-10 13:50:55
 * @Description: theme type
 */
interface ITheme {
    theme: string;
    bg: string;
    color: string;
}

//actions -> theme config
const actions = new Map<string, ITheme>([
    ["success", {
        theme: "success",
        bg: "#f0f9eb",
        color: "#67c23a"
    }],
    ["warning", {
        theme: "warning",
        bg: "#fdf6ec",
        color: "#e6a23c"
    }],
    ["message", {
        theme: "message",
        bg: "#f4f4f5",
        color: "#909399"
    }],
    ["error", {
        theme: "error",
        bg: "#fef0f0",
        color: "#f56c6c"
    }],
    //default: success
    ["default", {
        theme: "success",
        bg: "#f0f9eb",
        color: "#67c23a"
    }]
])

export const getTheme = (theme: string): ITheme => {
    return actions.get(theme) || actions.get("default") as ITheme;
}
