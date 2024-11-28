import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Success from "./components/Success";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/success" component={Success} />
      </Switch>
    </>
  );
}

export default App;
