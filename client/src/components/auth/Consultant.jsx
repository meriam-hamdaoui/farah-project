import React, { useState } from "react";
import User from "../forms/User";
import { useDispatch } from "react-redux";
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
import { signConsultant } from "../../JS/consultantReducer";

const Consultant = () => {
  const navigate = useNavigate();
  //validation state
  const [validated, setValidated] = useState(false);

  let test = { ...consultantValues };

  const [consultant, setConsultant] = useState({ ...test });

  const dispatch = useDispatch();

  //handle change for nested consultant object
  const handleConsultant = (e) => {
    const { name, value } = e.target;
    if (
      name === "street" ||
      name === "state" ||
      name === "city" ||
      name === "zipCode"
    ) {
      test = {
        ...consultant,
        user: {
          ...consultant.user,
          address: {
            ...consultant.user.address,
            [name]: value,
          },
        },
      };
      setConsultant(test);
    } else if (name === "gender" || name === "domain" || name === "offers") {
      test = { ...consultant, [name]: value };
      setConsultant(test);
    } else if (
      name === "degree" ||
      name === "university" ||
      name === "graduation"
    ) {
      test = {
        ...consultant,
        educations: { ...consultant.educations, [name]: value },
      };
      setConsultant(test);
    } else {
      test = {
        ...consultant,
        user: {
          ...consultant.user,
          [name]: value,
        },
      };
      setConsultant(test);
    }
    // console.log(name, value);
    // console.log(parent);
    console.log("test => ", test);
  };

  const handleSubmit = async (event, value) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    dispatch(signConsultant(value));
    // add postConsultant
    setValidated(true);
    console.log("submit consultant =>", consultant);
  };

  return (
    <Form autoComplete="off" noValidate validated={validated}>
      <Container>
        <User
          name="user"
          user={consultant.user}
          category={"consultant"}
          handleChange={handleConsultant}
        >
          <Row>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              defaultValue="male"
              row
              required
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                onChange={handleConsultant}
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                onChange={handleConsultant}
              />
              <Form.Control.Feedback type="invalid">
                choose your gender
              </Form.Control.Feedback>
            </RadioGroup>
          </Row>
          <br />
          <Row>
            <FloatingLabel
              controlId="floatingInput"
              label="Domaine"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                name="domain"
                onChange={handleConsultant}
              />
              <Form.Control.Feedback type="invalid">
                required
              </Form.Control.Feedback>
            </FloatingLabel>
          </Row>
          {/* eductions */}
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Degree"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="text"
                  name="degree"
                  onChange={handleConsultant}
                />
                <Form.Control.Feedback type="invalid">
                  required
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="University"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="text"
                  name="university"
                  onChange={handleConsultant}
                />
                <Form.Control.Feedback type="invalid">
                  required
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <FloatingLabel
              controlId="floatingInput"
              label="Graduation Date"
              className="mb-3"
            >
              <Form.Control
                required
                type="date"
                name="graduation"
                onChange={handleConsultant}
              />
              <Form.Control.Feedback type="invalid">
                required
              </Form.Control.Feedback>
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
            <Button
              variant="primary"
              onClick={(e) => handleSubmit(e, { ...consultant })}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Consultant;
