// 使用hooks的副作用函数实现类组件钩子函数的功能
import react, { useState, useEffect } from 'react'
export default function Counter02() {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log(`count的值改变了,${count}`)
  })
  return <div>
    <p>总共点击了：{count}次</p>
    <button onClick={() => setCount(count + 1)}>点击按钮加一</button>
  </div>
}