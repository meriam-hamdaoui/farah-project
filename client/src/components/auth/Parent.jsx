import React, { useState, useParams } from "react";
import User from "../forms/User";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { signParent } from "../../JS/parentReducer";
import { stateOptions } from "../constant/constant";

const Parent = () => {
  const navigate = useNavigate();
  const validationCategory = () => {
    alert(`this form is only for parent`);
    navigate("/sign-in", { replace: true });
  };

  const [parent, setParent] = useState(parentValues);
  const { user, job, familyMembers, demandes } = parent;
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    address: { street, zipCode, city, state },
  } = user;

  // console.log("process.env =>", process.env.REACT_APP_API_URL);

  const dispatch = useDispatch();

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

  const handleSubmit = async (value) => {
    await postParent(value);
    console.log("parent =>", value);
  };

  return (
    <Form autoComplete="off">
      <Container>
        {/* <User
          name="user"
          user={user}
          category={"parent"}
          handleChange={handleChange}
        /> */}

        <Row>
          <FormLabel
            className="account"
            id="demo-row-radio-buttons-group-label"
          >
            I'm
          </FormLabel>
          <RadioGroup
            required
            defaultValue="parent"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="user.category"
          >
            <FormControlLabel
              value="parent"
              control={<Radio />}
              label="Parent"
            />
            <FormControlLabel
              value="consultant"
              control={<Radio />}
              label="Consultant"
              onClick={() => validationCategory()}
            />
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
                name="user.firstName"
                value={parent.user.firstName}
                onChange={(e) => handleChange(e)}
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
                name="user.lastName"
                value={user.lastName}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <FloatingLabel
            controlId="floatingInput"
            label="Phone"
            className="mb-3"
          >
            <Form.Control
              required
              type="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </FloatingLabel>
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
              name="user.email"
              value={user.email}
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
                name="user.password"
                value={user.password}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingPassword" label="Confirmation">
              <Form.Control
                required
                type="password"
                name="user.confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <FloatingLabel controlId="floatingAddress" label="Address">
              <Form.Control
                required
                type="text"
                name="user.address.street"
                value={user.address.street}
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
                  name="user.address.city"
                  value={user.address.city}
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <FloatingLabel as={Col} controlId="floatingAddress" label="State">
                <Form.Select
                  required
                  name="user.address.city"
                  value={user.address.city}
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
                  name="user.address.zipCode"
                  value={user.address.zipCode}
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Row>
        </Row>

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
            <Button
              variant="primary"
              onClick={() =>
                handleSubmit({
                  user: {
                    firstName,
                    lastName,
                    email,
                    phone,
                    password,
                    confirmPassword,
                    address: { street, zipCode, city, state },
                  },
                  job,
                  familyMembers,
                  demandes,
                })
              }
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Parent;
