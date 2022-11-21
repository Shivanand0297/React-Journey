import { useState } from "react";
import {FormGroup, Form, InputGroup, Input, Button} from "reactstrap"
import {v4} from "uuid"
import React from 'react'

const Todoform = ({addTodos}) => {  // method as a prop
    const [todoString, setTodoString] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(todoString === ""){
            return alert("Enter a valid todo")
        }
        const todo = {
            todoString, 
            id: v4()
        }
        addTodos(todo);
        setTodoString("");
    }


  return (
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <InputGroup>
            <Input
            type="text"
            placeholder="Enter a valid todo"
            name="todo"
            value={todoString}
            onChange={(e)=>(setTodoString(e.target.value))}
            />
            <Button 
            color="success"
            type="submit"
            >Add Todo</Button>
            </InputGroup>
        </FormGroup>
    </Form>
  )
}

export default Todoform