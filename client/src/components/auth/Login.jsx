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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  //move for the registration for depending on category
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
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:5000/farah/sign-in",
        values
      );
      // console.log("response from login=>", response);
      localStorage.setItem("token", res.data.token);
      const { role } = res.data.exists;
      if (role === 0) {
        navigate("/dashboard");
      }
      if (role === 1) {
        navigate("/parent/profil");
      }
      if (role === 2) {
        navigate("/consultant/profil");
      }
    } catch (error) {
      console.error("submit login", error);
    }
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
              type="button"
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
