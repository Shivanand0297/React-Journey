import { useState } from 'react'

function App() {

  return (
    <>
      <FunctionalInitialization/>
    </>
  )
}

export default App

const FunctionalInitialization = () => {
  const [state, setState] = useState(() => console.log("hello"))

  // ! State will reinitialize again and again on every rerender
  // to avoid this use lazy initialization using function which return some value

  return (
    <>
      <button
        onClick={() => setState(Math.random())}
      > State: {state}</button>
    </>
  )
}