import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/landing";
import Signup from "./components/auth/signup";
import ChoosePlan from "./components/partials/select_plan";
import Dashboard from "./components/pages/dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/choose_plan" exact component={ChoosePlan} />
          <Route path="/dashboard/:profile" exact component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
