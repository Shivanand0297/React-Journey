import {useReducer} from "react"  //action can have both types and payload because of this useReducer, it is kind of combination of both useContext and useState
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {TodoContext} from "./context/TodoContext"
import todoReducer from "./context/reducer"
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App =()=> {
  const [todos, dispatch] = useReducer(todoReducer, [])
  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>Todo app with context API</h1>
        <Todos/>
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  )
}
export default App;

// now we need 2 things one form and a button to sumbit todos and a form group to list all the todos
