/*
 * @Author: PacificD
 * @Date: 2021-10-07 16:56:57
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-07 21:29:55
 * @Description: tooltip tsx
 */
import { FC, ReactElement } from 'react'
import IPosi from '../../types/posi';
import './index.css'

interface IProps {
    msg: string;
    show: any;
    posi: IPosi
}

const ToolTip: FC<IProps> = ({
    msg,
    show,
    posi
}): ReactElement => {
    let isShow = show ? 'block' : 'none';

    return (
        <div className='tooltip' style={{
            display: isShow,
            top: posi.top,
            right: posi.right,
            left: posi.left,
            bottom: posi.bottom
        }}>{msg}</div>
    )
}

export default ToolTip;
