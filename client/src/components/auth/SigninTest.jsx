import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const res = await axios.post("http://localhost:5000/farah/sign-in", values);
    localStorage.setItem("token", res.data.token);
    const { role } = res.data.exists;
    if (role === 0) {
      navigate("/dashboard");
    } else if (role === 1) {
      navigate("/parent/profil");
    } else if (role === 2) {
      navigate("/consultant/profil");
    }
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={() => onSubmit({ email, password })}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signin;
