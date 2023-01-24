// combining all the reducers
import { combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
    reducer: reducer
})

export default reducers

// 3️⃣