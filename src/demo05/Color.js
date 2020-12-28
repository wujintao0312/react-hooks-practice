// 将Color.js中的color变量共享出去
import React, { createContext, useReducer } from 'react'

export const colorContext = createContext()

export const UPDATE_COLOR = 'UPDATE_COLOR'

const reducer = (state, action) => {
  switch(action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}

export function Color(props) {
  const [color, dispatch] = useReducer(reducer, 'red')
  return <colorContext.Provider value={{color, dispatch}}>
    {props.children}
  </colorContext.Provider>
}