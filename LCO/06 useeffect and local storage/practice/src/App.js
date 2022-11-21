import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }
  }, [])

  const addTodos = (todo) =>{
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  const removeTodos = (id) =>{
    setTodos(todos.filter(todo=>todo.id !== id))
  }
    

  return (
    <Container fluid>
        <h1>todo with local memory - practice</h1>
        <Todos todos={todos} removeTodos={removeTodos}/>
        <TodoForm addTodos={addTodos}/>
    </Container>
  )
}

export default App