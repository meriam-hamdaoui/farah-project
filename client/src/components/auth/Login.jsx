import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  Container,
  Row,
  Col,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material/";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();

  const handleRegister = () => {
    if (category === "parent") {
      navigate("/sign-up/parent");
    }
    if (category === "consultant") {
      navigate("/sign-up/consultant");
    }
    if (!category) {
      alert("please choose a for to subscribe");
    }
  };

  const loginSubmit = async (e) => {
    // try {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/farah/sign-in",
      values
    );
    console.log("response from login=>", response);
    await localStorage.setItem("token", response.data.token);
    const role = response.data.exists;
    if (role === 1) {
      alert(`welcome parent`);
    }
    if (role === 2) {
      alert("welcome consultant");
    }
    if (role === 0) {
      alert("i'm the admin");
    }
    // } catch (error) {
    //   console.error("submit login", error);
    // }
  };

  return (
    <Form>
      <Container>
        <Row>
          <FloatingLabel controlId="email" label="Email" className="mb-3">
            <Form.Control
              required
              autoComplete="false"
              type="email"
              name="email"
              // value={values.email}
              onChange={(e) => handleChange(e)}
            />
          </FloatingLabel>
        </Row>
        <Row>
          <FloatingLabel controlId="password" label="Password">
            <Form.Control
              required
              type="password"
              name="password"
              // value={values.password}
              onChange={(e) => handleChange(e)}
            />
          </FloatingLabel>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => loginSubmit(e)}
            >
              Submit
            </Button>
          </Col>
          <Col>
            <Link to="www.google.com">Mot de passe oublier?</Link>
          </Col>
        </Row>
        <Row>
          <Row>
            <label>J'ai pas du compte? &nbsp; Je suis </label>
          </Row>
          <Row>
            <RadioGroup required row name="category">
              <FormControlLabel
                value="parent"
                control={<Radio />}
                label="Parent"
                onChange={(e) => setCategory(e.target.value)}
              />

              <FormControlLabel
                value="consultant"
                control={<Radio />}
                label="Consultant"
                onChange={(e) => setCategory(e.target.value)}
              />
            </RadioGroup>
          </Row>
        </Row>
        <Row>
          <Button variant="outline-primary" onClick={() => handleRegister()}>
            Créer Un
          </Button>
        </Row>
      </Container>
    </Form>
  );
};

export default Login;
