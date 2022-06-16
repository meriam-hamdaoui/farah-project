import React from "react";

const Signup = () => {
  return (
    <div>
      <h1>Create Account</h1>

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
        <button className="button button-block">submit</button>
      </form>
    </div>
  );
};

export default Signup;
