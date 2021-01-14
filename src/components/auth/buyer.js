import React, { useState } from "react";

const Buyer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "hello world",
    confirmPassword: "",
    accept: false,
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    console.log(id);
    const newValue = {
      ...data,
      [`${id}`]: id === "accept" ? event.target.checked : value,
    };
    setData(newValue);
  };

  const { name, email, password, confirmPassword, accept } = data;
  return (
    <div className="auth buyer">
      <h2>
        Signup as a <b>Buyer</b>
      </h2>
      <form>
        <div>
          <p className="lb">
            Name<span className="required">*</span>
          </p>
          <input
            type="text"
            placeholder="Name"
            id="name"
            required
            onChange={handleInputChange}
            value={name}
          />
        </div>
        <div>
          <p className="lb">
            Email<span className="required">*</span>
          </p>
          <input
            type="email"
            placeholder="Email"
            id="email"
            required
            onChange={handleInputChange}
            value={email}
            autoComplete="username"
          />
        </div>
        <div>
          <p className="lb">
            Password<span className="required">*</span>
          </p>
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleInputChange}
            value={password}
            autoComplete="current-password"
          />
        </div>
        <div>
          <p className="lb">
            Confirm password<span className="required">*</span>
          </p>
          <input
            type="password"
            placeholder="Confirm password"
            id="confirmPassword"
            required
            onChange={handleInputChange}
            value={confirmPassword}
            autoComplete="current-password"
          />
        </div>
        <div className="check-container">
          <input
            type="checkbox"
            checked={accept}
            id="accept"
            required
            onChange={handleInputChange}
          />
          <label htmlFor="accept-terms">
            By clicking this, you agree to the terms and agreement
          </label>
        </div>
        <div>
          <button className="submit">Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default Buyer;
