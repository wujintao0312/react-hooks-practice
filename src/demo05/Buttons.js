import React, { useContext } from 'react'
import { colorContext, UPDATE_COLOR } from './Color'

// 从color继承数据，还有修改数据的方法


export default function Buttons() {
  const {color, dispatch} = useContext(colorContext)
  // console.log(color, dispatch)
  return <div>
    <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'blue'})}>蓝色</button>
    <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'yellow'})}>黄色</button>
  </div>
}