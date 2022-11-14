import { useContext } from "react";
import {ListGroup, ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"
import { TodoContext } from "../context/TodoContext";

// dispatching action
import { REMOVE_TODO } from "../context/action.types";


const Todos = () =>{
    const {todos, dispatch} = useContext(TodoContext)


    return(
        <ListGroup className="my-3 items">
            {/* now we need to loop through the "todos" because it is holding multiple values */}
            {todos.map((todo)=>(
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="float-right"
                    onClick={()=>{
                        dispatch({
                            type: REMOVE_TODO,
                            payload: todo.id
                        })
                    }}
                    >
                        <FaCheckDouble/>
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos