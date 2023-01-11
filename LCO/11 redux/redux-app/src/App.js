import React from 'react'
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

// importing components
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

// redux
import {Provider} from "react-redux"
// importing store
import store from './store/Store'



const App = () => {
  return (
    <Provider store={store} >
      <Container fluid>
        <Todos/>
        <TodoForm/>
      </Container>
    </Provider>
  )
}

export default App