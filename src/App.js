import React, { Component, useContext } from 'react'

// 类组件计数器
// import Counter01 from './demo01/Counter01'

// hooks组件计数器
// import Counter02 from './demo01/Counter02'

// 使用useState声明多个状态变量
// import Counter03 from './demo01/Counter03'

// 类组件计数器的钩子函数
// import Counter01 from './demo02/Counter01'

// hooks副作用函数的钩子
// import Counter02 from './demo02/Counter02'

// hooks副作用函数实现类似类组件中componentWillUnmount钩子函数的功能
// import Counter03 from './demo02/Counter03'
// import Index from './demo02/practice/Index'
// import Logger from './demo02/practice/Logger'
// import Counter from './demo02/practice/Counter'

// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

// useContext这个hooks函数
// import { Example } from './demo03/Example'

// useReducer这个hooks函数
// import Counter from './demo04/Counter'

// 使用useContext来实现全局状态的共享
// import ShowArea from './demo06/ShowArea'
// import Buttons from './demo06/Buttons'

// import { Color } from './demo06/Color'

// useMemo这个hooks函数的使用
// import Example from './demo07/Example'

import Example from './demo09/Example01'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div>
    {/* <Counter01></Counter01> */}
    {/* <Counter02></Counter02> */}
    {/* <Counter03></Counter03> */}
    {/* <Counter01></Counter01> */}
    {/* <Counter></Counter>
    <ul>
      <li><NavLink to="/" exact>首页</NavLink></li>
      <li><NavLink to="/login">登录</NavLink></li>
    </ul> */}

    {/* 配置路由规则 */}
    {/* <Route path="/" exact component={Index}></Route>
    <Route path="/login" component={Logger}></Route> */}

    {/* <Example></Example> */}

    {/* <Counter></Counter> */}

    {/* <Color>
      <ShowArea></ShowArea>
      <Buttons></Buttons>
    </Color> */}

    <Example></Example>


  </div>
        
  }
}

export default App