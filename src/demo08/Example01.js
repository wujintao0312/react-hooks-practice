import React, { useRef, useState, useEffect } from 'react'

export default function Example01() {
  const [ count, setCount ] = useState(0)
  const ref = useRef()
  useEffect(() => {
    // 使用useRef创建出来一个ref变量来存储count这个变量
    ref.current = count
    console.log('保存的变量的值是：', ref.current)
  }, [count])
  return <div>
    <input type="text" value={count} onChange={(e) => setCount(e.target.value)}/>
  </div>
}