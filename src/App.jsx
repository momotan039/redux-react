import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Form from "./components/Form";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
          <Header/>
          <div className="main">
            <SideBar/>
            <Form/>
          </div>
      </div>
    </Provider>
  );
}

export default App;
