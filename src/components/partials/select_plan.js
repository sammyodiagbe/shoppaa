import React, { useState } from "react";

const ChoosePlan = () => {
  const [plan, selectedPlan] = useState(1);
  return (
    <div className="choose-plan">
      <div className="box">
        <h1>Select a Plan</h1>
        <div className="plans-container">
          <section className={`plan ${plan === 1 ? "selected" : ""}`}>
            <h1>Free</h1>
            <button className="select-plan" onClick={() => selectedPlan(1)}>
              {plan === 1 ? "Selected" : "Choose plan"}
            </button>
          </section>
          <section className={`plan ${plan === 2 ? "selected" : ""}`}>
            <h1>Mini</h1>
            <button className="select-plan" onClick={() => selectedPlan(2)}>
              {plan === 2 ? "Selected" : "Choose plan"}
            </button>
          </section>
          <section className={`plan ${plan === 3 ? "selected" : ""}`}>
            <h1>Maxi</h1>
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
