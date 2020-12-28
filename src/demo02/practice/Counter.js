import { useState, useEffect } from 'react'
export default function Counter() {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log('组件里的状态变量发生变化了')
    return () => {
      console.log('只有count的值发生变化时，这个回调函数才会执行')
    }
  }, [count])
  return <div>
    <p>总共点击了：{count}次</p>
    <button onClick={() => setCount(count + 1)}>点击按钮加一</button>
  </div>
}