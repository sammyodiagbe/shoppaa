import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/landing";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" component={LandingPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
