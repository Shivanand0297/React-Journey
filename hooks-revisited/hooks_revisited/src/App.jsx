import { useState } from "react";

function App() {
  return (
    <>
      <div>
        <FunctionalInitialization />
      </div>
      <div>
        <SetState />
      </div>
      <div>
        <SetStateWithPreviousValues />
      </div>
    </>
  );
}

export default App;

const FunctionalInitialization = () => {
  const [state, setState] = useState(() => console.log("hello"));

  // ! State will reinitialize again and again on every rerender
  // to avoid this use lazy initialization using function which return some value

  return (
    <>
      <button onClick={() => setState(Math.random())}> State: {state}</button>
    </>
  );
};

const SetState = () => {
  const [counter, setCounter] = useState(0);
  // console.log("rerender");
  // const counter = 0

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);  // here const counter = 0, because this const counter becomes const counter = 1 when react calls the components, since we cannot reinitialize the const value
          // and here internally counter is 0 
          setTimeout(() => {
            setCounter(counter + 1); // here counter = 0
          }, 500);
          setTimeout(() => {
            setCounter(counter + 1); // here counter = 0
          }, 1000);
        }}
      >
        Counter: {counter} {/* here counter = 1 */}
      </button>
    </>
  );
};

const SetStateWithPreviousValues = () => {
  const [counter, setCounter] = useState(0);
  console.log("rerender");
  // const counter = 0

  return (
    <>
      <button
        onClick={() => {
          setCounter((value) => value + 1);  // here react internally knows the previous values of the state so updating every time
          setTimeout(() => {
            setCounter((value) => value + 1);
          }, 500);
          setTimeout(() => {
            setCounter((value) => value + 1);
          }, 1000);
        }}
      >
        Counter with previous values: {counter}
      </button>
    </>
  );
};
