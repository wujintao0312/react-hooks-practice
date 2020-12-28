// 这是首页组件
import { useEffect } from 'react'
export default function Index() {
  useEffect(() => {
    console.log('首页页面渲染了')
    return () => {
      console.log('首页页面卸载了')
    }
  }, [])
  return <div>
    <p>这是首页页面</p>
  </div>
}