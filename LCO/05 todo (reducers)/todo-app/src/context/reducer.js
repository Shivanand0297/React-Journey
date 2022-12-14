import {ADD_TODO, REMOVE_TODO} from './action.types'

export default (state, action)=>{   //this is todoReducer will return new state
    switch (action.type) {  // it is an object which consists of variety of things
        case ADD_TODO:
            console.log([...state, action.payload]);    //[{id:, todoString: }]
            return [...state, action.payload]   //payload is the information it carries along with it, in our case it is our todo string and we want to add it to the state
    
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload); 
        default:
            return state;
    }
}