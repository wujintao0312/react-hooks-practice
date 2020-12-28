import React, { createContext, useReducer } from 'react'

export const colorContext = createContext()

const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_COLOR':
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