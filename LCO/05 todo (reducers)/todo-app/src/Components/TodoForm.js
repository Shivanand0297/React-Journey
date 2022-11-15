import { useState, useContext } from "react";
import {
    FormGroup,  //to hold form as well as button
    Input, 
    Button, 
    Form, 
    InputGroup, 
} from "reactstrap"

import {v4} from "uuid"
import {TodoContext} from "../context/TodoContext"
import { ADD_TODO } from "../context/action.types";


const TodoForm = () =>{
    const [todoString, setTodoString] = useState("")    // storing and updating whatever we are typing in the input form
    const { dispatch } = useContext(TodoContext)


    const handleSubmit = e =>{
        e.preventDefault()
        if(todoString === ""){
            return alert("Please enter a valid TODO")
        }

        const todo ={
            todoString: todoString,
            id: v4()
        }
        // now we need to dispatch this todo so that it get stored in the central place in the context

        // const todo ={
        //     todoString,  //can also use this
        //     id: v4()
        // }

        dispatch({
            type: ADD_TODO,
            payload: todo,
        })

        // after submitting the form we need to emptyout the form
        setTodoString("")
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Enter your next todo"
                value={todoString}
                onChange={e => setTodoString(e.target.value)}
                />
                <Button 
                color="warning"
                // onclick
                >
                Add Todo
                </Button>                
                </InputGroup>
            </FormGroup>
        </Form>
    )

}

export default TodoForm
