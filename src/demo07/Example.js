import React, { useState } from 'react'
import ChildrenComponent from './ChildrenComponent'

export default function Example() {
  const [ date, setDate ] = useState('1228')
  const [ thing, setThing ] = useState('上班')
  return <div>
    <button onClick={() => setDate(Math.random())}>日期</button>
    <button onClick={() => setThing(Math.random())}>做事</button>
    <ChildrenComponent first={date}>{date}</ChildrenComponent>
  </div>
}