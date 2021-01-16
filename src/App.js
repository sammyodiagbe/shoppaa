import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/landing";
import Signup from "./components/auth/signup";
import ChoosePlan from "./components/partials/select_plan";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/choose_plan" exact component={ChoosePlan} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
