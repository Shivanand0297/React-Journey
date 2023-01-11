import { createStore, combineReducers } from "redux"

import reducer from "../reducer/todo"

const rootReducer = combineReducers({reducer})
const store = createStore(rootReducer)

export default store