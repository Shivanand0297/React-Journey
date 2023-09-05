import { useState } from 'react'
import './App.css'
import { Socket } from './socketServise'

function App() {
  const [count, setCount] = useState(0)

  const socket = new Socket(); // Note: this socket class will be called again and again and will result in multiple instances of the "socket" object

  // ? To have the same instance of the socket class we use singleton pattern
  console.log("socket", socket) 

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
