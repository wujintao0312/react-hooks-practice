// 使用hooks的useReducer函数来实现计数的加减双向操作
import { useReducer } from 'react'
export default function Counter() {
  // const [ count, setCount ] = useState(0)

  const [ count, dispatch ] =  useReducer((state, action) => {
    switch(action.type) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }, 12)

  return <div>
    <h2>现在的分数是： {count}</h2>
    <button onClick={() => dispatch({type: 'add'})}>加一</button>
    <button onClick={() => dispatch({type: 'sub'})}>减一</button>
  </div>
}