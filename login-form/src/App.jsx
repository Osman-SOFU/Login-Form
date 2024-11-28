import { Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Success from "./components/Success";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Switch>
        <Login></Login>
        <Success></Success>
      </Switch>
    </>
  );
}

export default App;
