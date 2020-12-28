// 这是登录组件
import { useEffect } from 'react'
export default function Index() {
  useEffect(() => {
    console.log('登录页面渲染了')
    return () => {
      // 登录页面卸载时，希望执行的操作，可以写在这个函数中
      console.log('登录页面卸载了')
    }
  }, [])
  return <div>
    <p>这是登录页面</p>
  </div>
}