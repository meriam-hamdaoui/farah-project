import React from "react";

const Signin = () => {
  return (
    <div>
      <h1>Welcome Back!</h1>

      <form action="/" method="post">
        <div className="field-wrap">
          <input
            type="email"
            placeholder="Email Address"
            required
            autocomplete="off"
          />
        </div>
        <div className="field-wrap">
          <input
            type="password"
            placeholder="Password"
            required
            autocomplete="off"
          />
        </div>
        <p className="forgot">
          <a href="/change-password">Forgot Password?</a>
        </p>
        <button className="button button-block">Log In</button>
      </form>
    </div>
  );
};

export default Signin;
