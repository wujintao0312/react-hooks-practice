// hooks副作用函数实现类组件中钩子函数componentWillUnmount的功能
import react, { useState, useEffect } from 'react'

export default function Counter03() {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log(`count的值发生变化了:${count}`)
    return () => {
      console.log('解绑副作用函数执行了')
    }
  }, [count])
  return <div>
    <p>总共点击了：{count}次</p>
    <button onClick={() => setCount(count + 1)}>点击按钮加一</button>
  </div>
} 