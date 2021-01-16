import React, { useState } from "react";

const ChoosePlan = () => {
  const [plan, selectedPlan] = useState(1);
  return (
    <div className="choose-plan">
      <a href="http://localhost:3000/dashboard" className="brand">
        Cashew
      </a>
      <a href="http://localhost:3000/dashboard" className="close-dialog">
        Send me to my Dashboard
      </a>
      <div className="box">
        <h1 className="almost-done">You are almost done.</h1>
        <p className="choose-plan">
          Choose a plan or start free then upgrade later.
        </p>
        <div className="plans-container">
          <section className={`plan ${plan === 1 ? "selected" : ""}`}>
            <h1 className="price-name">Free</h1>
            <h2 className="price">
              0$ <span>/ month</span>
            </h2>
            <div className="plan-offers">
              <section className="column">
                <div className="left">
                  <p>Total store front</p>
                </div>
                <div className="right">
                  {" "}
                  <p className="total">1</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Photo per product</p>
                </div>
                <div className="right">
                  <p className="total">1</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Real time chat</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Email alert</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>SMS alert</p>
                </div>
                <div className="right">
                  <p className="total">no</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Slashed Sales</p>
                </div>
                <div className="right">
                  <p className="total">no</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Coupons</p>
                </div>
                <div className="right">
                  <p className="total">no</p>
                </div>
              </section>
            </div>
            <button className="select-plan" onClick={() => selectedPlan(1)}>
              {plan === 1 ? "Selected" : "Choose plan"}
            </button>
          </section>
          <section className={`plan ${plan === 2 ? "selected" : ""}`}>
            <h1 className="price-name">Mini</h1>
            <h2 className="price">
              30$ <span>/ month</span>
            </h2>
            <div className="plan-offers">
              <section className="column">
                <div className="left">
                  <p>Total store front</p>
                </div>
                <div className="right">
                  {" "}
                  <p className="total">5</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Photo per product</p>
                </div>
                <div className="right">
                  <p className="total">3</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Real time chat</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Email alert</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>SMS alert</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Slashed Sales</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Coupons</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
            </div>
            <button className="select-plan" onClick={() => selectedPlan(2)}>
              {plan === 2 ? "Selected" : "Choose plan"}
            </button>
          </section>
          <section className={`plan ${plan === 3 ? "selected" : ""}`}>
            <h1 className="price-name">Maxi</h1>
            <h2 className="price">
              50$ <span>/ month</span>
            </h2>
            <div className="plan-offers">
              <section className="column">
                <div className="left">
                  <p>Total store front</p>
                </div>
                <div className="right">
                  <p className="total">10</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Photo per product</p>
                </div>
                <div className="right">
                  <p className="total">5</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Real time chat</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Email alert</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>SMS alert</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Slashed Sales</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
              <section className="column">
                <div className="left">
                  <p>Coupons</p>
                </div>
                <div className="right">
                  <p className="total">yes</p>
                </div>
              </section>
            </div>
            <button className="select-plan" onClick={() => selectedPlan(3)}>
              {plan === 3 ? "Selected" : "Choose plan"}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
