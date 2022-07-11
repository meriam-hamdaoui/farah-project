import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material/";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
        </Row>
        <Row>
          <FloatingLabel controlId="password" label="Password">
            <Form.Control
              required
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit">
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
