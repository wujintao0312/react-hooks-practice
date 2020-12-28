import React, { useMemo } from 'react'

export default function ChildrenComponent({first, children}) {
  // 打印了一句话
  function print(first) {
    console.log(first, '数据发生了变化')
  }
  const word = useMemo(() => print(first), [first])
  return <div>
    <div>{word}</div>
    <div>{children}</div>
  </div>
}