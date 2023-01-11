import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FaCheckDouble } from "react-icons/fa"

// redux
import { connect } from "react-redux" //to connect to react-redux store
import { removeTodo } from '../action/todos'


const Todos = ({todos, markComplete}) => {
  return (
    <ListGroup>
        {todos.map(todo=>(
            <ListGroupItem key={todo.id} >
                {todo.title}
                <span 
                className='float-right' 
                onClick={()=>{markComplete(todo.id)}}
                >
                    <FaCheckDouble/>
                </span>
            </ListGroupItem>
        ))}
    </ListGroup>
  )
}


const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch =>({
    markComplete: id =>{
        dispatch(removeTodo(id))
    }
})


export default  connect(mapStateToProps, mapDispatchToProps)(Todos)