import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <header className="App-header">
            <p>Building an ecomerce platform</p>
          </header>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
