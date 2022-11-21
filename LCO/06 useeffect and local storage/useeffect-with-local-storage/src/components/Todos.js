import {ListGroup, ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"
import React from 'react'

const Todos = ({todos, removeTodo}) => {
  return (
    <ListGroup className="my-4 items">
        {todos.map(todo=>{
            return <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span 
                    className="float-right"
                    onClick={()=>(removeTodo(todo.id))}
                    ><FaCheckDouble/></span>
                    </ListGroupItem>
        })}
    </ListGroup>
  )
}

export default Todos