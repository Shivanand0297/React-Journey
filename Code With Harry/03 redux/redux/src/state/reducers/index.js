// combining all the reducers
import { combineReducers } from "redux";
import moneyReducer from "./moneyReducer";

const reducers = combineReducers({
    reducer: moneyReducer
})

export default reducers

// 3️⃣