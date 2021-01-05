import React from "react";
import "../../styles/pages/signup.css";
import Buyer from "./buyer";
import Seller from "./seller";

const Signup = () => {
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
          <button className="tab-btn buyer active">I want to Buy</button>
          <button className="tab-btn buyer">I want to Sell</button>
        </div>
        <div className="auth-body">
          <Seller />
        </div>
      </section>
    </div>
  );
};

export default Signup;
