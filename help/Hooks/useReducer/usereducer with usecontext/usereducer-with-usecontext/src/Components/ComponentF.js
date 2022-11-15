import React, {useContext} from 'react'
import { CountContext } from '../App'
const ComponentF = () => {
  const { countState, countDispatch } = useContext(CountContext) //destructuring
  return (
    <div>ComponentF: {countState}
        <button onClick={()=>{countDispatch("increment")}}>Increment</button>
        <button onClick={()=>{countDispatch("decrement")}}>Decrement</button>
        <button onClick={()=>{countDispatch("reset")}}>Reset</button>
    </div>
  )
}

export default ComponentF