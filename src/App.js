import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/landing";
import Signup from "./components/auth/signup";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" exact component={Signup} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
