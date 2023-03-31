import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import { createStore } from "redux";
import counterReducer from "./redux/reducers/counterReducer";

function App() {

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
