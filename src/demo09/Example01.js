import Example from './Example'

export default function Example01() {
  const { width, height } = Example()
  return <div>
    <p>当前屏幕的宽：{width},高：{height}</p>
  </div>
}