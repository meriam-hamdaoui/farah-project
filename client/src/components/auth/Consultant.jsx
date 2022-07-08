import React, { useState } from "react";
import User from "../forms/User";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Row,
  FloatingLabel,
  Container,
  Col,
  Button,
} from "react-bootstrap";
import { Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material/";
import { consultantValues } from "../constant/constant";

const Consultant = () => {
  const [consultant, setConsultant] = useState(consultantValues);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsultant((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    // console.log(`name => ${name}
    // value => ${value}`);
  };

  return (
    <Form>
      <Container>
        <User
          user={consultant.user}
          category={"consultant"}
          handleChange={handleChange}
        >
          <Row>
            <FormLabel
              className="account"
              id="demo-row-radio-buttons-group-label"
            >
              Gender
            </FormLabel>
            <RadioGroup
              defaultValue="male"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="male" control={<Radio />} label="male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="female"
              />
            </RadioGroup>
          </Row>
          <br />
          <Row>
            <FloatingLabel
              controlId="floatingInput"
              label="Domaine"
              className="mb-3"
            >
              <Form.Control type="text" />
            </FloatingLabel>
          </Row>
        </User>
        <Row>
          <Col>
            <Button
              variant="outline-danger"
              onClick={() => navigate("/sign-in", { replace: true })}
            >
              Go Back
            </Button>
          </Col>
          <Col>
            <Button variant="primary">Submit</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Consultant;
