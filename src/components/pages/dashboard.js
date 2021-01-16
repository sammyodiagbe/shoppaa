import React, { Component } from "react";
import "../../styles/pages/dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="dashboard">
        <div className="left">
          <div className="top">
            <a href="#cashew" className="brand">
              Cashew
            </a>
          </div>
        </div>
        <div className="right">
          <nav className="navigation">
            <div className="details-container">
              <span>
                Good morning, <b>Odiagbe</b>
              </span>
              <a
                href="http://localhost:3000/choose_plan?action_type='upgrade'"
                className="upgrade-plan"
              >
                Upgrade plan
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Dashboard;
