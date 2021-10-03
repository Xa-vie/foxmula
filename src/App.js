import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Task1 from "./screens/Task1"
import Task2 from "./screens/Task2"


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={Task1} />
          <Route exact path="/task2" component={Task2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
