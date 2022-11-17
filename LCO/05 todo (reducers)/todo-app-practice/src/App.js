import { useReducer } from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import reducer from './context/reducer';
import { TodoContext } from './context/TodoContext';

const App = () => {
  const [todos, dispatch] = useReducer(reducer, [])
  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>Todo App</h1>
        <Todos/>
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
