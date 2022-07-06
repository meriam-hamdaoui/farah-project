import React from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material/";
import { Link } from "react-router-dom";

const Signin = () => {
  const [category, setCategory] = React.useState("parent");
  return (
    <Form style={{ width: "60vh" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="john@example.com" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remerber me" />
      </Form.Group>
      <Container>
        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
          <Col>
            <Link to="www.google.com">Forgot password?</Link>
          </Col>
        </Row>
        <br />
        <Row>
          <FormControl className="sep">
            <Col>
              <FormLabel
                className="account"
                id="demo-row-radio-buttons-group-label"
              >
                Don't have an account? &nbsp;
              </FormLabel>
              <Link to={`/sign-up/${category}`}>Sign Up As</Link>
            </Col>
            <Col>
              <RadioGroup
                defaultValue="parent"
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="parent"
                  control={<Radio />}
                  label="Parent"
                  onChange={() => setCategory("parent")}
                />
                <FormControlLabel
                  value="consultant"
                  control={<Radio />}
                  label="Consultant"
                  onChange={() => setCategory("consultant")}
                />
              </RadioGroup>
            </Col>
          </FormControl>
        </Row>
      </Container>
    </Form>
  );
};

export default Signin;
