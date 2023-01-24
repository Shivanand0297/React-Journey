// creating store 5️⃣

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";


// createStore takes all the reducers and initial state and middleware
// thunk helps in executing asynchronous functions, we will study more about this

export const store = createStore(reducers, {}, applyMiddleware(thunk))

// now we will provide the store to whole app in index.js