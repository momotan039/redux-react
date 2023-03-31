import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import { createStore } from "redux";

function App() {
  const counterReducer=(state={count:0},action)=>{
    switch (action.type) {
      case 'Increment':
        return {...state,count:state.count+1}
        case 'Decrement':
          return {...state,count:state.count-1}
      default:
        return state
    }
  }
  const store=createStore(counterReducer)
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
