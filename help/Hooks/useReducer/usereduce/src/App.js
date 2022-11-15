/* 
useReducer (reducer, initialState )
newState = reducer(currentState , action)
useReducer returns a pair of values.
[newState, dispatch] 
*/

import React from 'react'
import CounterOne from './components/CounterOne'
import CounterThree from './components/CounterThree'
import CounterTwo from './components/CounterTwo'

const App = () => {
  return (
    <div>
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      <CounterThree/>
    </div>
  )
}

export default App