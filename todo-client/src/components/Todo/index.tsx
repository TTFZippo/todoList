/*
 * @Author: PacificD
 * @Date: 2021-10-07 14:16:42
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-07 15:16:52
 * @Description:
 */

import { FC, ReactElement } from "react";
import "./index.css"
import TodoInfo from "./TodoInfo";
import Buttons from "./Buttons";

const Todo: FC = (): ReactElement => {
    return (
        <div className="todo">
            <TodoInfo />
            <Buttons />
        </div>
    )
}

export default Todo;