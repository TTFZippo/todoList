/*
 * @Author: PacificD
 * @Date: 2021-10-07 15:12:47
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-07 21:56:11
 * @Description:
 */

import { FC, ReactElement, useState } from "react";
import './index.css'
import ToolTip from "../../ToolTip";
import IPosi from "../../../types/posi";

const msg: Array<string> = [
    'completed',
    'edit',
    'remove'
];
const posi: IPosi = {
    top: '-6vh',
    right: '0'
};

const Buttons: FC = (): ReactElement => {
    let [show, setShow] = useState([false, false, false]);

    const toggleToolTip = (isShow: boolean, index?: number): void => {
        if (isShow) {
            let showArray = [false, false, false];
            showArray[index!] = true;
            setShow(showArray)
        } else {
            setShow([false, false, false]);
        }
    };

    return (
        <div className="button-list">
            <div onMouseOver={() => toggleToolTip(true, 0)}
                onMouseOut={() => toggleToolTip(false)}
                className='button completed'>
                <ToolTip msg={msg[0]} show={show[0]} posi={posi} />
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fillOpacity="0.01" /><path d="M43 11L16.875 37L5 25.1818" stroke="#f9a825" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div onMouseOver={() => toggleToolTip(true, 1)}
                onMouseOut={() => toggleToolTip(false)}
                className='button edit'>
                <ToolTip msg={msg[1]} show={show[1]} posi={posi} />
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22" stroke="#00b0ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M32 44L42 34L38 30L28 40V44H32Z" fill="none" stroke="#00b0ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M30 4V14H40" stroke="#00b0ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div onMouseOver={() => toggleToolTip(true, 2)}
                onMouseOut={() => toggleToolTip(false)}
                className='button remove'>
                <ToolTip msg={msg[2]} show={show[2]} posi={posi} />
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fillOpacity="0.01" /><path d="M14 11L4 24L14 37H44V11H14Z" fill="none" stroke="#f50057" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 19L31 29" stroke="#f50057" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M31 19L21 29" stroke="#f50057" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
        </div>
    )
}

export default Buttons;