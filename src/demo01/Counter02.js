// 使用hooks函数--react的新特性完成一个计数器
import react, { useState } from 'react'
export default function Counter02(props) {
  // render() {
  //   return <div>
  //     <p>总共点击了：{}次</p>
  //     <button>点击按钮加一</button>
  //   </div>
  // }
  const [ count, setCount ] = useState(0)
  return <div>
      <p>总共点击了：{count}次</p>
      <button onClick={() => setCount(count + 1)}>点击按钮加一</button>
  </div>
}