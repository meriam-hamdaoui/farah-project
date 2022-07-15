import React, { useState } from "react";
import User from "../forms/User";
// import { useDispatch } from "react-redux";
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
// import { signParent } from "../../JS/parentReducer";

const Parent = () => {
  const navigate = useNavigate();
  //validatiion state
  const [validated, setValidated] = useState(false);

  let test = { ...parentValues };

  const [parent, setParent] = useState({ ...test });

  // const dispatch = useDispatch();

  //handle change for nested parent object
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "street" ||
      name === "state" ||
      name === "city" ||
      name === "zipCode"
    ) {
      test = {
        ...parent,
        user: {
          ...parent.user,
          address: {
            ...parent.user.address,
            [name]: value,
          },
        },
      };
      setParent(test);
    } else if (
      name === "civil" ||
      name === "job" ||
      name === "familyMembers" ||
      name === "demandes"
    ) {
      test = { ...parent, [name]: value };
      setParent(test);
    } else {
      test = {
        ...parent,
        user: {
          ...parent.user,
          [name]: value,
        },
      };
      setParent(test);
    }
    // console.log(name, value);
    // console.log(parent);
    // console.log("test => ", test);
  };

  const handleSubmit = () => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    //   setValidated(true);

    postParent({ ...parent })
      .then((res) => {
        console.log("postParent res =>", res);
        setParent({ ...parentValues });
        alert("success");
        navigate("/sign-in", { replace: true });
      })
      .catch((err) => {
        console.error(err);
        alert("failed");
      });

    // await postParent(value);
    console.log("submit parent =>", parent);
  };

  // const handleSubmit = async (value) => {
  //   dispatch(signParent(value));
  //   // await postParent(value);
  //   console.log("parent =>", parent);
  // };

  return (
    <Form autoComplete="off" noValidate validated={validated}>
      <Container>
        <User
          name="user"
          user={parent.user}
          category={"parent"}
          handleChange={handleChange}
        >
          <Row>
            <FormLabel>Etat Civil</FormLabel>
            <RadioGroup
              required
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="civil"
            >
              <FormControlLabel
                value="maried"
                control={<Radio />}
                label="Marier"
                onChange={handleChange}
              />
              <FormControlLabel
                value="divorced"
                control={<Radio />}
                label="Divorcer"
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                choose your current situation
              </Form.Control.Feedback>
            </RadioGroup>
          </Row>
          <br />
          <Row>
            <FloatingLabel
              controlId="floatingInput"
              label="Emploi"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                name="job"
                // value={parent.job}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                required.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Row>
          <Row>
            <Form.Group>
              <FloatingLabel
                controlId="floatingZip"
                label="Nombre de Members de la famille"
              >
                <Form.Control
                  required
                  type="number"
                  min="1"
                  name="familyMembers"
                  // value={parent.familyMembers}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  required. it must be a number
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Row>
          <br />
          <Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comment pouvons-nous vous aider? </Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                name="demandes"
                // value={parent.demandes}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                required.
              </Form.Control.Feedback>
            </Form.Group>
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
            <Button variant="primary" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Parent;
