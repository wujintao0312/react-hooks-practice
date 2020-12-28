// 使用react类组件的语法，写一个计数组件
import React, { Component } from 'react'
class Counter01 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  // handleAdd() {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  render() {
    return <div>
      <p>总共的点击了：{this.state.count}次</p>
      {/* <button onClick={this.handleAdd.bind(this)}>点击按钮加一</button> */}
      <button onClick={() => this.setState({count: this.state.count + 1})}>点击按钮加一</button>
    </div>
  }
}

export default Counter01