import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import Counter from "./components/Counter";

function App() {
  return (
      <div className="App">
        <Counter/>
      </div>
  );
}

export default App;
