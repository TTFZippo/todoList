/*
 * @Author: PacificD
 * @Date: 2021-10-10 13:09:50
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-10 14:35:44
 * @Description: alert tsx
 */
import { FC, ReactElement, useEffect, useState } from "react";
import "./index.css"
import { getTheme } from "./theme"
import { IErrorAlert } from "../../types/errorAlert";

const Alert: FC<IErrorAlert> = ({
    msg,
    theme,
}): ReactElement => {
    let { bg, color } = getTheme(theme);

    let [positionTop, setPositionTop] = useState('-5%');
    let flag = false;

    useEffect(() => {
        setPositionTop("5%")
    }, [flag])
    flag = true;

    return (
        <div className="alert" style={{
            backgroundColor: bg,
            color: color,
            top: positionTop,
        }}>
            {msg}
        </div >
    )
}

export default Alert;
