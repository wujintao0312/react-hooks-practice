import React, { useRef } from 'react'

export default function Example() {
  // 发现没？函数组件的方法不用再处理this的问题了
  // 那这时候就不能再写成简写的方法写法了，只能 函数名 = 函数
  const inputEL = useRef(null)
  const handleClick = () => {
    inputEL.current.value = 'hello JSpang!'
    console.log(inputEL.current.value)
  }
  // handleClick() {
  //   inputEL.current.value = 'JSpang'
  // }
  return <div>
    <input ref={inputEL} type="text"/>
    <button onClick={handleClick}>点击按钮，设置input输入框的值</button>
  </div>
}