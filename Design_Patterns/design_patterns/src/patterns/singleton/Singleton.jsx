import { useState } from 'react'
import { Socket } from '../../socketServise';

function Singleton() {
  const [count, setCount] = useState(0)

  const socket = new Socket(); // Note: this socket class will be called again and again and will result in multiple instances of the "socket" object

  // ? To have the same instance of the socket class we use singleton pattern
  console.log("socket", socket) 

  return (
    <>
        <div>Singleton</div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default Singleton
