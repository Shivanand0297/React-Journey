import React from 'react'
import {Container} from "reactstrap"
import { useState, useEffect } from 'react'
import Todoform from './components/Todoform'
import Todos from './components/Todos'
import  "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"


const App = () => {
  const [todos, setTodos] = useState([])

  // to load all the todos stored in the local storage
  useEffect(()=>{
    const localTodos = localStorage.getItem("todos")
    console.log({localStorage});
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }
  }, [])

  // added into state
  const addTodos = async (todo) =>{
    setTodos([...todos, todo])
  }

  // adding into local storage
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);  // whenever there is change in the todos, run this method and add that into local storage

  const removeTodo = (id) =>{
    setTodos(todos.filter(todo=>todo.id !== id))
  }

  return (
    <Container fluid>
      <h1>Todo with local storage</h1>
      <Todos todos={todos} removeTodo={removeTodo}/>
      <Todoform addTodos={addTodos}/>
    </Container>  
  )
}

export default App