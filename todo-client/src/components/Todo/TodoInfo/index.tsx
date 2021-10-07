/*
 * @Author: PacificD
 * @Date: 2021-10-07 15:12:57
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-07 16:17:30
 * @Description:
 */
import { FC, ReactElement } from 'react'
import './index.css'

const icon = {
    remained: <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fillOpacity="0.01" /><path d="M40 20C40 26.8077 35.7484 32.6224 29.7555 34.9336H24H18.2445C12.2516 32.6224 8 26.8077 8 20C8 11.1634 15.1634 4 24 4C32.8366 4 40 11.1634 40 20Z" fill="none" stroke="#fbc02d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M29.7555 34.9336L29.0764 43.083C29.0332 43.6013 28.5999 44 28.0798 44H19.9201C19.4 44 18.9668 43.6013 18.9236 43.083L18.2444 34.9336" stroke="#fbc02d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 17V23L24 20L30 23V17" stroke="#fbc02d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    completed: <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fillOpacity="0.01" /><path fill-rule="evenodd" clip-rule="evenodd" d="M6 42H42V6H32H30C28.6758 9.15854 26.6758 10.7378 24 10.7378C21.3242 10.7378 19.3242 9.15854 18 6H16H6V42Z" fill="none" stroke="#17bb77" strokeWidth="3" strokeLinejoin="round" /><path d="M15 24L21 30L33 18" stroke="#17bb77" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

const TodoInfo: FC = (): ReactElement => {
    return (
        <div className="info">
            <div className="state">
                {icon.remained}
                <h2>todo</h2>
            </div>
            <p className="content">react app新拟态，英文叫作：Neumorphism，是由「New Skeuomorphism」组合的新名词，也就是新型态的拟物化风格设计，中文称作新拟态、同化，也有设计师称其为Soft UI（软UI）。 Neumorphism 是 2020 年最热门的新风格，它透过灯光的原理，替图形加上高光和阴影，类似于浮雕的效果，赋予元件真实和立体感。
                它在 2021 年仍有望成为最好的网页设计趋势之一。</p>
            <p className="create-time">
                create-time:
                2021-10-07
            </p>
        </div>
    )
}

export default TodoInfo