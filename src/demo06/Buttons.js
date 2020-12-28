import React, { useContext } from 'react'

import { colorContext } from './Color'

export default function Buttons() {
  const {color, dispatch} = useContext(colorContext)
  return <div>
    <button onClick={() => dispatch({type: 'UPDATE_COLOR', color: 'blue'})}>更改字体颜色为蓝色</button>
    <button onClick={() => dispatch({type: 'UPDATE_COLOR', color: 'green'})}>更改字体颜色为绿色</button>
  </div>
}