import React, {useReducer} from 'react'

const CounterThree = () => {

    // TODO: step 2 is to define reducer and initialState
    const initialState = 0;
    const reducer = (state, action) =>{ // this will return newState for this state to change we need somthing, and that somthing is action
        
        switch (action) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;      
            case "reset":
                return initialState
            default:
                return state;
        }
    }
    // TODO: step3 we need some value to display in the jsx and method to call the reducer function with proper action

    const [count, dispatch] = useReducer(reducer, initialState)   //TODO: step 1 is to call the useReducer function
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)   

    // useReducer will return the current state (count) and a  method
  return (
    <div>
        <div>Count: {count}</div>
        <button onClick={()=>{dispatch("increment")}}>Increment</button>
        <button onClick={()=>{dispatch("decrement")}}>Decrement</button>
        <button onClick={()=>{dispatch("reset")}}>Reset</button>
        <div>
        <div>Count with 2nd reducer: {countTwo}</div>
        <button onClick={()=>{dispatchTwo("increment")}}>Increment</button>
        <button onClick={()=>{dispatchTwo("decrement")}}>Decrement</button>
        <button onClick={()=>{dispatchTwo("reset")}}>Reset</button>
        </div>
    </div>
  )
}

export default CounterThree