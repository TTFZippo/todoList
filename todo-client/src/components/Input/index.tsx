/*
 * @Author: PacificD
 * @Date: 2021-10-07 16:37:21
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-07 21:30:07
 * @Description: input tsx
 */
import React, { FC, ReactElement, useState } from 'react'
import './index.css'
import ToolTip from '../ToolTip';
import IPosi from '../../types/posi';

const position: IPosi = {
    top: '-6vh',
    right: '-0.4vw'
}

const Input: FC = (): ReactElement => {
    let [show, setShow] = useState(false);

    const toggleToolTip = (isShow: boolean, e?: React.MouseEvent): void => {
        isShow ? setShow(true) : setShow(false);
    };

    return (
        <div className='add-todo'>
            <ToolTip msg="add todo" show={show} posi={position} />
            <input className="input" type="text" placeholder='Add a new todo!' />
            <svg onMouseOver={() => toggleToolTip(true)}
                onMouseOut={() => toggleToolTip(false)}
                viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6H8C6.89543 6 6 6.89543 6 8V16" stroke="#29c908" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 42H8C6.89543 42 6 41.1046 6 40V32" stroke="#29c908" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M32 42H40C41.1046 42 42 41.1046 42 40V32" stroke="#29c908" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M32 6H40C41.1046 6 42 6.89543 42 8V16" stroke="#29c908" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M32 24L16 24" stroke="#29c908" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M24 32L24 16" stroke="#29c908" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
    )
}

export default Input