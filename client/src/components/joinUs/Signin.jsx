import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

//formik validation function
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "please enter your password";
  }
  return errors;
};

const Signin = () => {
  return (
    <div>
      <h1>Welcome Back!</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        handleChange={(e, prevValues) => {
          const { name, value } = e.target;
          return { ...prevValues, [name]: value };
        }}
        validate={validate}
        handleSubmit={(e, values, actions) => {
          e.prevantDefault();
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(values, handleSubmit, handleChange) => (
          <Form onSubmit={handleSubmit}>
            <div className="field-wrap">
              <Field
                value={values.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
                autoComplete="off"
              />
              <ErrorMessage component="small" name="email" />
            </div>
            <div className="field-wrap">
              <Field
                value={values.password}
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                autoComplete="off"
              />
              <ErrorMessage component="small" name="password" />
            </div>
            <p className="forgot">
              <a href="/change-password">Forgot Password?</a>
            </p>
            <button className="button button-block">Log In</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
