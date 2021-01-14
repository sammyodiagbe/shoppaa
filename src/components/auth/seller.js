import React, { useState } from "react";

const Seller = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
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
        Signup as a <b>Seller</b>
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
            value={name}
            onChange={handleInputChange}
            required
            autoComplete="username"
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
            value={email}
            onChange={handleInputChange}
            required
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
            value={password}
            onChange={handleInputChange}
            required
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
            value={confirmPassword}
            onChange={handleInputChange}
            required
            autoComplete="current-password"
          />
        </div>
        <div className="check-container">
          <input
            type="checkbox"
            name="accept-terms"
            id="accept"
            checked={accept}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="accept">
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
