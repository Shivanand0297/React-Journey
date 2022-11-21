import React, { useState } from "react";
import { Button, Form, FormGroup, Input, InputGroup } from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("enter a valid todo");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    addTodos(todo);
    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Enter todo"
            name="todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button type="submit" color="warning" />
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
