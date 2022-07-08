import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { stateOptions } from "../constant/constant";
import { Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material/";

const User = (props) => {
  const { category, user, handleChange, children } = props;
  const navigate = useNavigate();

  return (
    <>
      <Row>
        <FormLabel className="account" id="demo-row-radio-buttons-group-label">
          For
        </FormLabel>
        <RadioGroup
          required
          defaultValue={category}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="category"
        >
          {category === "parent" ? (
            <FormControlLabel
              value="parent"
              control={<Radio />}
              label="Parent"
            />
          ) : (
            <FormControlLabel
              value="consultant"
              control={<Radio />}
              label="Consultant"
            />
          )}
        </RadioGroup>
      </Row>
      <Row>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="first Name"
            className="mb-3"
          >
            <Form.Control
              required
              type="text"
              name="firstName"
              // value={user.firstName}
              onChange={handleChange}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="last Name "
            className="mb-3"
          >
            <Form.Control
              required
              type="text"
              name="lastName"
              // value={user.lastName}
              onChange={handleChange}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            required
            autoComplete="false"
            type="email"
            name="email"
            // value={user.email}
            onChange={handleChange}
          />
        </FloatingLabel>
      </Row>
      <Row>
        <Col>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              required
              type="password"
              name="password"
              // value={user.password}
              onChange={handleChange}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingPassword" label="Confirmation">
            <Form.Control
              required
              type="password"
              name="confirmPassword"
              // value={user.confirmPassword}
              onChange={handleChange}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <br />
      <Row>
        <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
          <Form.Control
            required
            type="phone"
            name="phone"
            // value={user.phone}
            onChange={handleChange}
          />
        </FloatingLabel>
      </Row>
      <br />
      <Row>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <FloatingLabel controlId="floatingAddress" label="Address">
            <Form.Control
              required
              type="text"
              name="street"
              // value={user.address.street}
              onChange={handleChange}
            />
          </FloatingLabel>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <FloatingLabel controlId="floatingCity" label="City">
              <Form.Control
                required
                type="text"
                name="city"
                // value={user.address.city}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <FloatingLabel as={Col} controlId="floatingAddress" label="State">
              <Form.Select
                required
                name="state"
                // value={user.address.city}
                onChange={handleChange}
              >
                <option></option>
                {stateOptions.map((state) => (
                  <option key={state.id}>{state.value}</option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <FloatingLabel controlId="floatingZip" label="Zip">
              <Form.Control
                required
                type="number"
                min="1"
                name="zipCode"
                // value={user.address.zipCode}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
      </Row>
      {children}
      <Form.Group className="mb-3">
        <Form.Check required label="Agree to terms and conditions" />
      </Form.Group>
    </>
  );
};

export default User;
