import { applyMiddleware, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import reduxThunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const store = createStore(
//   counterReducer,
//   enhancer(applyMiddleware(reduxThunk))
// );

const store=configureStore({
    reducer:{
        counter:counterSlice
    }
})
export default store;
