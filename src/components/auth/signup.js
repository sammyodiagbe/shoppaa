import React, { useState } from "react";
import "../../styles/pages/signup.css";
import Buyer from "./buyer";
import Seller from "./seller";

const Signup = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="signup-page">
      <section className="left">
        <div className="writeup">
          <h1>Create your account</h1>
          <p>
            Either you want to sell your goods or your skills, could be arts or
            your designs, pigeon makes it easy and straightforward.
          </p>
        </div>
      </section>
      <section className="right">
        <div className="tab">
          <button
            className={`tab-btn buyer ${activeTab === 1 && "active"}`}
            onClick={() => setActiveTab(1)}
          >
            I want to Buy
          </button>
          <button
            className={`tab-btn buyer ${activeTab === 2 && "active"}`}
            onClick={() => setActiveTab(2)}
          >
            I want to Sell
          </button>
        </div>
        <div className="auth-body">
          {activeTab === 1 ? <Buyer /> : <Seller />}
        </div>
      </section>
    </div>
  );
};

export default Signup;
