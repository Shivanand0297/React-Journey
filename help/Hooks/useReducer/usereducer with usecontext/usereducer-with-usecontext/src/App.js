import React, { useReducer } from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';

export const CountContext = React.createContext();

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

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
      <div className="App">
       App.js Count: {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </div>
    </CountContext.Provider>
  );
}

export default App;
//Our goal is to maintain a count state in app.js and update it through multiple components like Component A, D & F 

// step 1. Create a counter in app.js using reducer hook
// step 2. Provide and consume the counter context in the required components