import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Task1 from "./screens/Task 1/Task1"
import Task2 from "./screens/Task 2/Task2"
import Home from "./screens/Home"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home />}
          />
          <Route
            exact
            path="/task1"
            render={() => <Task1 />}
          />
          <Route
            exact
            path="/task2"
            render={() => <Task2 />}
          />
          <Route
            path="*"
            render={() => <Redirect to="/" />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
