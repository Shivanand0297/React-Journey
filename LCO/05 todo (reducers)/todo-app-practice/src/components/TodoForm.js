import React, { useContext, useState } from "react";
import { FormGroup, InputGroup, Form, Input, Button } from "reactstrap";
import { v4 } from "uuid";
import { ADD_TODO } from "../context/action.type";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {

  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleInput = (e) => {
    setTodoString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      alert("Enter a valid Todo");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input 
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter your next todo"
          onChange={handleInput} value={todoString} />
        <Button color="warning" onClick={handleSubmit}>
        Add
        </Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
