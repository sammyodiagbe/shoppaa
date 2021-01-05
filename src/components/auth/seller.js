import React from "react";

const Seller = () => {
  return (
    <div className="auth buyer">
      <h2>
        Signup as a <b>Seller</b>
      </h2>
      <form>
        <div>
          <p className="lb">
            Name<span className="required">*</span>
          </p>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <p className="lb">
            Email<span className="required">*</span>
          </p>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <p className="lb">
            Password<span className="required">*</span>
          </p>
          <input type="password" placeholder="password" />
        </div>
        <div>
          <p className="lb">
            Confirm password<span className="required">*</span>
          </p>
          <input type="password" placeholder="Confirm password" />
        </div>
        <div className="check-container">
          <input type="checkbox" value="" name="accept-terms" />
          <label htmlFor="accept-terms">
            By clicking this, you agree to the terms and agreement
          </label>
        </div>
        <div>
          <button className="submit">Proceed</button>
        </div>
      </form>
    </div>
  );
};

export default Seller;
