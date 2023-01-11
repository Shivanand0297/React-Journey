import React, { useState } from "react";
import {
  Container,
  FormGroup,
  Form,
  Input,
  Button,
  InputGroup,
} from "reactstrap";

import { v4 } from "uuid";

// redux

import { connect } from "react-redux";
import { addTodo } from "../action/todos";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");


   const handleSubmit = (e) =>{
    e.preventDefault()

    if(title === ""){
        return alert("please enter a valid todo")
    }

    const todo = {
        title,
        id: v4()
    }
    addTodo(todo)
    setTitle("")

   }

  return (
    <div>
      <h1>Todo form</h1>
      <Form>
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="todo"
              id="todo"
              placeholder="Enter your todo"
              value={title}
              onChange={e=>(setTitle(e.target.value))}
            />
            <Button
            onClick={handleSubmit}
            >ADD</Button>
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  );
};


// redux methods to talk to the central place

const mapStateToProps = state => ({}) // responsible for bringing data from the state into your component

const mapDispatchToProps = dispatch => ({
    addTodo: todo=>{
        dispatch(addTodo(todo))
    }
})


export default  connect(mapStateToProps, mapDispatchToProps)(TodoForm);
