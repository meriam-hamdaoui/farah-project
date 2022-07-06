import React, { useState } from "react";
import User from "../forms/User";
import {
  Form,
  Row,
  Col,
  FloatingLabel,
  Container,
  Button,
} from "react-bootstrap";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material/";
import { parentValues } from "../constant/constant";

const Parent = () => {
  return (
    <Form>
      <Container>
        <User category={"parent"} />
        <Row>
          <FormLabel>My Civil Situation</FormLabel>
          <RadioGroup
            required
            defaultValue="maried"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="civil"
          >
            <FormControlLabel
              value="maried"
              control={<Radio />}
              label="Maried"
            />
            <FormControlLabel
              value="divorced"
              control={<Radio />}
              label="Divorced"
            />
          </RadioGroup>
        </Row>
        <br />
        <Row>
          <FloatingLabel controlId="floatingInput" label="Job" className="mb-3">
            <Form.Control required type="text" />
          </FloatingLabel>
        </Row>
        <br />
        <Row>
          <Form.Group>
            <FloatingLabel controlId="floatingZip" label="family Members">
              <Form.Control required type="number" min="1" />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <br />
        <Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>How can we help you? </Form.Label>
            <Form.Control required as="textarea" rows={3} />
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-danger">Go Back</Button>
          </Col>
          <Col>
            <Button variant="primary">Submit</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Parent;
