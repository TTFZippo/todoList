/*
 * @Author: PacificD
 * @Date: 2021-10-07 11:55:11
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-10 11:47:03
 * @Description: 
 */
import { FC, ReactElement, useState } from 'react';
import './App.css'
import TodoList from './components/TodoList';
import Login from './components/Login';


const App: FC = (): ReactElement => {
  let [isShow, setIsShow] = useState(false);

  let show = isShow ? 'block' : 'none';

  return (

    <div className="App">
      <TodoList login={() => { setIsShow(true) }} />
      <div className="mask" style={{ display: show }}></div>
      <Login isShow={isShow} close={() => { setIsShow(false) }} />
    </div>
  );
}

export default App;
