// 使用class组件记录计数器状态改变时的打印
import react, { Component } from 'react'
class Counter01 extends Component {
  state = {
    count: 0
  }
  componentDidMount() {
    console.log(`count的初始值是:, ${this.state.count}`)
  }
  componentDidUpdate() {
    console.log(`count改变后的值是：,${this.state.count}`)
  }
  render() {
    return <div>
      <p>总共点击了：{this.state.count}次</p>
      <button onClick={() => this.setState({count: this.state.count + 1})}>点击按钮加一</button>
    </div>
  }
}

export default Counter01