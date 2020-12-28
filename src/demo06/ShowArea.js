import React, { useContext } from 'react'

import { colorContext } from './Color'

export default function ShowArea() {
  const {color} = useContext(colorContext)
  console.log(useContext(colorContext))
  return <div style={{color}}>字体的颜色为:{color}</div>
}