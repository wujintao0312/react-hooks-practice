import { useContext } from 'react'
import { CountContext } from './Example'

export default function Counter() {
  const count = useContext(CountContext)
  return <div>
    这是父组件传递过来的数据：{count}
  </div>
}