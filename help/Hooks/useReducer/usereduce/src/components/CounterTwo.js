// useReducer with state object and action object

import React, {useReducer} from 'react'

const CounterTwo = () => {

    // TODO: step 2 is to define reducer and initialState
    const initialState = {  // global state
        firstCounter: 0,
        SecondCounter: 10,
    }
    const reducer = (state, action) =>{ // this will return newState for this state to change we need somthing, and that somthing is action
            // action refers the entire object
        switch (action.type) {
            case "increment":
                return { ...state, firstCounter: state.firstCounter + action.value}
            case "decrement":
                return { ...state, firstCounter: state.firstCounter - action.value};      
            case "increment2":
                return { ...state, SecondCounter: state.SecondCounter + action.value}
            case "decrement2":
                return { ...state, SecondCounter: state.SecondCounter - action.value};      
            case "reset":
                return initialState
            default:
                return state;
        }
    }
    // TODO: step3 we need some value to display in the jsx and method to call the reducer function with proper action

    const [count, dispatch] = useReducer(reducer, initialState)   //TODO: step 1 is to call the useReducer function
    console.log("useReducer",useReducer(reducer, initialState));
    console.log("count:",count);
    /**
     * useReducer (2) [{firstCounter: 0}, ƒ()]
       count: {firstCounter: 0}
     */
    // useReducer will return the current state object (count{}) and a  method
  return (
    <div>
        <h2>counter 2</h2>
        <div>Counter 1: {count.firstCounter}</div>
        <div>Counter 2: {count.SecondCounter}</div>
        <button onClick={()=>{dispatch({type: "increment", value: 1})}}>Increment 1</button>
        <button onClick={()=>{dispatch({type: "decrement", value: 1})}}>Decrement 1</button>
        <button onClick={()=>{dispatch({type: "increment", value: 5})}}>Increment 5</button>
        <button onClick={()=>{dispatch({type: "decrement", value: 5})}}>Decrement 5</button>
        <button onClick={()=>{dispatch({type: "increment2", value: 5})}}>Increment 5 counter2</button>
        <button onClick={()=>{dispatch({type: "decrement2", value: 5})}}>Decrement 5 counter2</button>
        <button onClick={()=>{dispatch({type: "reset"})}}>Reset</button>
    </div>
  )
}

export default CounterTwo

// advantage of using object method
//1. value by which we want to increment or decrement the counter (we can pass some additional values along with the type)

//2. we can add some additional properties in the state object {} 