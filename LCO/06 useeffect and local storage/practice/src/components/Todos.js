import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import {FaCheckDouble} from "react-icons/fa"

const Todos = ({todos, removeTodos}) => {
  return (
    <ListGroup>
        {todos.map(todo=>(
            <ListGroupItem key={todo.id}>
                {todo.todoString}
                <span 
                className='float-right'
                onClick={()=>removeTodos(todo.id)}
                ><FaCheckDouble/></span>
            </ListGroupItem>
        ))}
    </ListGroup>
  )
}

export default Todos