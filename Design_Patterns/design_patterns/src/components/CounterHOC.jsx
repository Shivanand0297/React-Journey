import { useState } from "react"

const CounterHOC = (ButtonComponent, increment) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const [counter, setCounter] = useState(0)
    const handleCounter = () => {
      setCounter(counter => counter + increment)
    }
    return(
      <ButtonComponent value={counter} setValue={handleCounter} {...props}/>   
    )
  }
}

export default CounterHOC