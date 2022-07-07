import React, { useState } from "react";
import User from "../forms/User";
import { useDispatch } from "react-redux";
import {
  Form,
  Row,
  Col,
  FloatingLabel,
  Container,
  Button,
} from "react-bootstrap";
import { Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material/";
import { parentValues } from "../constant/constant";
import { postParent } from "../../api/parent";
// import { signParent } from "../../JS/parentReducer";

const Parent = () => {
  const [parent, setParent] = useState(parentValues);

  // const dispatch = useDispatch();
  console.log("process.env => ", process.env.API_PATH);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParent((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    // console.log(`name => ${name}
    // value => ${value}`);
  };

  const handleSubmit = (value) => {
    // dispatch(signParent(value));
    postParent(value);
    setParent({});
    console.log("parent =>", value);
  };

  return (
    <Form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <Container>
        <User
          user={parent.user}
          category={"parent"}
          handleChange={handleChange}
        />

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
            <Form.Control
              required
              type="text"
              name="job"
              value={parent.job}
              onChange={handleChange}
            />
          </FloatingLabel>
        </Row>
        <br />
        <Row>
          <Form.Group>
            <FloatingLabel controlId="floatingZip" label="family Members">
              <Form.Control
                required
                type="number"
                min="1"
                name="familyMembers"
                value={parent.familyMembers}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <br />
        <Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>How can we help you? </Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              name="demandes"
              value={parent.demandes}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-danger">Go Back</Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={() => handleSubmit(parent)}>
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Parent;
