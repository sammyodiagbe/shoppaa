import React, { useState } from "react";

const ChoosePlan = () => {
  const [plan, selectedPlan] = useState(1);
  return (
    <div className="choose-plan">
      <button className="close-dialog">&times;</button>
      <div className="box">
        <h1 className="almost-done">You are almost done</h1>
        <p className="choose-plan">
          Choose a plan or start free then upgrade later
        </p>
        <div className="plans-container">
          <section className={`plan ${plan === 1 ? "selected" : ""}`}>
            <h1 className="price-name">Free</h1>
            <h2 className="price">
              0$ <span>/ month</span>
            </h2>
            <button className="select-plan" onClick={() => selectedPlan(1)}>
              {plan === 1 ? "Selected" : "Choose plan"}
            </button>
          </section>
          <section className={`plan ${plan === 2 ? "selected" : ""}`}>
            <h1 className="price-name">Mini</h1>
            <h2 className="price">
              30$ <span>/ month</span>
            </h2>
            <button className="select-plan" onClick={() => selectedPlan(2)}>
              {plan === 2 ? "Selected" : "Choose plan"}
            </button>
          </section>
          <section className={`plan ${plan === 3 ? "selected" : ""}`}>
            <h1 className="price-name">Maxi</h1>
            <h2 className="price">
              50$ <span>/ month</span>
            </h2>
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
