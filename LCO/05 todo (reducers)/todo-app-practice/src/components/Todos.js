import React, { useContext } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { TodoContext } from '../context/TodoContext'
import {FaCheckDouble} from "react-icons/fa"
import { REMOVE_TODO } from '../context/action.type'

const Todos = () => {
    const {todos, dispatch} = useContext(TodoContext)
  return (
    <ListGroup className='items'>
       {todos.map(todo =>(
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span onClick={dispatch({
            type: REMOVE_TODO,
            payload: todo.id,
          })}>
            <FaCheckDouble/>
          </span>
        </ListGroupItem>
       ))}
    </ListGroup>
  )
}

export default Todos