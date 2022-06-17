import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Button, Row, Col } from "react-bootstrap";

import Select from "react-select";

import { validationSchema, initialValues, stateOptions } from "./objects";

const Signup = (props, { user, handleChange }) => {
  const navigate = useNavigate();

  const navigateToForm = () => {
    user.parent
      ? navigate("/register/parent")
      : navigate("/register/consultant");
  };

  return (
    <div>
      <h1>Create Account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleChange={handleChange}
        handleSubmit={(e, values, actions) => {
          e.prevantDefault();
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldTouched,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-2">
              <Form.Group as={Col} md="4">
                <Field
                  name="fName"
                  value={values.fName}
                  onChange={handleChange}
                  type="text"
                  placeholder="first Name"
                  required
                  autoComplete="off"
                />
                <ErrorMessage component="small" name="fName" />{" "}
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Field
                  name="lName"
                  value={values.lName}
                  onChange={handleChange}
                  type="text"
                  placeholder="last Name"
                  required
                  autoComplete="off"
                />
                <ErrorMessage component="small" name="lName" />{" "}
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Field
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="username@example.com"
                  required
                  autoComplete="off"
                />
                <ErrorMessage component="small" name="email" />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Field
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  required
                  autoComplete="off"
                />
                <ErrorMessage component="small" name="password" />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Field
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="Confirm Password"
                  required
                  autoComplete="off"
                />
                <ErrorMessage component="small" name="confirmPassword" />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Field
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  type="txt"
                  placeholder="phone"
                  required
                  autoComplete="off"
                />
                <ErrorMessage component="small" name="phone" />
              </Form.Group>
              <div>
                address
                <Form.Group as={Col} md="4">
                  <Field
                    name="street"
                    value={values.street}
                    onChange={handleChange}
                    type="text"
                    placeholder="your street address"
                    required
                    autoComplete="off"
                  />
                  <ErrorMessage component="small" name="street" />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Field
                    name="zipCode"
                    value={values.zipCode}
                    onChange={handleChange}
                    type="text"
                    placeholder="town zip code"
                    required
                    autoComplete="off"
                  />
                  <ErrorMessage component="small" name="zipCode" />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Select
                    onBlur={() => setFieldTouched("state", true)}
                    onChange={(option) => {
                      setFieldValue("state", option);
                    }}
                    name="state"
                    required
                    placeholder="select state ..."
                    options={stateOptions}
                  />
                  <ErrorMessage component="small" name="state.id" />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Field
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    type="text"
                    placeholder="city"
                    required
                    autoComplete="off"
                  />
                  <ErrorMessage component="small" name="city" />
                </Form.Group>
                {props.children}
              </div>
              <Button
                onClick={() => navigateToForm()}
                type="submit"
                className="btn"
                variant="primary"
              >
                continue
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/", { replace: true });
                }}
                className="btn"
                variant="warning"
              >
                cancel
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
