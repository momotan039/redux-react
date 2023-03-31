import { applyMiddleware, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import reduxThunk from "redux-thunk";
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  counterReducer,
  enhancer(applyMiddleware(reduxThunk))
);

export default store;
