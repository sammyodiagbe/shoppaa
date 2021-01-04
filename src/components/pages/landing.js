import React, { Component } from "react";
import "../../styles/pages/landing_page.css";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="landing-page">
        <header className="intro-header">
          <section className="left-section">
            <div className="writeup">
              <h1>Bring your business online with pigeon</h1>
              <p>
                pigeon makes it easy for you to bring your business online, with
                a lot of capabilities..
              </p>
              <a href="#signmeup" target="_black" className="get-started">
                Get Started
              </a>
            </div>
          </section>
          <section className="right-section">
            <div className="login-form-container">
              <h3>Login</h3>
              <form>
                <div>
                  <input type="text" placeholder="Email" />
                </div>
                <div>
                  <input type="password" placeholder="Password" />
                </div>
                <div className="auth-container">
                  <button>Login</button>
                  <a href="#forgot-password">forgot password</a>
                </div>
              </form>
            </div>
          </section>
        </header>
      </div>
    );
  }
}

export default LandingPage;
