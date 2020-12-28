// 这里来定义一个父组件，为子组件传递count变量
import { useState, createContext } from 'react'
import Counter from './Counter'
export const CountContext = createContext()
export function Example() {
  const [ count, setCount ] = useState(0)
  
  return <div>
    <p>总共点击了：{count}次</p>
    <button onClick={() => setCount(count + 1)}>点击按钮一次</button>
    <CountContext.Provider value={count}><Counter></Counter></CountContext.Provider>
  </div>
}