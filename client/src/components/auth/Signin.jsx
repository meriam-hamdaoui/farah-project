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
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [category, setCategory] = React.useState();

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const navigate = useNavigate();

  const handleClick = () => {
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
        <Form.Check type="checkbox" label="Enregistre le compte" />
      </Form.Group>
      <Container>
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
        <br />
        <Row>
          <FormControl className="sep">
            <Col>
              <FormLabel
                className="account"
                id="demo-row-radio-buttons-group-label"
              >
                J'ai pas du compte? &nbsp; Je suis
              </FormLabel>
            </Col>
            <Col>
              <RadioGroup required row name="category">
                <FormControlLabel
                  value="parent"
                  control={<Radio />}
                  label="Parent"
                  onChange={(e) => handleCategory(e)}
                />

                <FormControlLabel
                  value="consultant"
                  control={<Radio />}
                  label="Consultant"
                  onChange={(e) => handleCategory(e)}
                />
              </RadioGroup>
            </Col>
          </FormControl>
          <Button variant="outline-primary" onClick={() => handleClick()}>
            Créer Un
          </Button>
        </Row>
      </Container>
    </Form>
  );
};

export default Signin;
