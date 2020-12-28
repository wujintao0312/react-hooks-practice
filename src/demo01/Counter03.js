// 使用hooks函数，来声明多个状态变量
import React, { useState } from 'react'

export default function Counter03() {
  let isShow = true
  const [ name, setName ] = useState('英雄')
  // if (isShow) {
  //   const [ age, setAge ] = useState('16')
  //   isShow = false
  // }
  const [ age, setAge ] = useState('16')
  const [ work, setWork ] = useState('劫富济贫')
  return <div>
    <p>姓名：{name}</p>
    <p>年龄：{age}</p>
    <p>工作：{work}</p>
    <button onClick={() => setName('大英雄')}>更改姓名</button>
    <button onClick={() => setAge('18')}>更改年龄</button>
    <button onClick={() => setWork('拯救黎民苍生')}>更改工作</button>
  </div>
}