import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import UserCard from "./UserCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchConsultant } from "../../api/fetchs";
import { setAccountConsultant } from "../../JS/accountConsultant";
import UpdateConsultant from "../forms/UpdateConsultant";

const ConsultantProfil = () => {
  const consultant = useSelector((state) => state.accountConsultant);
  console.log("consultant profil =>", consultant);

  const { experiences, internships, certificates } = consultant;

  const gradutionDate = consultant.educations.graduation.slice(
    0,
    consultant.educations.graduation.indexOf("T")
  );

  const dispatch = useDispatch();

  const getConsultant = async () => {
    const res = await fetchConsultant();
    // console.log("getConsultant consultant =>", res);
    dispatch(setAccountConsultant(res.profil));
  };

  useEffect(() => {
    getConsultant();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <UserCard user={consultant.user}>
            <Card.Text> gender : {consultant.gender}</Card.Text>
            <Card.Text> domaine : {consultant.domain}</Card.Text>
            <Card.Text>
              niveau universitaire : {consultant.educations.degree}
            </Card.Text>
            <Card.Text>
              université : {consultant.educations.university}
            </Card.Text>
            <Card.Text>Date de diplome : {gradutionDate}</Card.Text>
            <Card.Text> offre : {consultant.offers} </Card.Text>
            <UpdateConsultant consultant={consultant} />
          </UserCard>
        </Col>
        <Col>
          {!experiences && !internships && !certificates && (
            <span>completer votre profile</span>
          )}
          {experiences &&
            experiences.map((el) => (
              <Card>
                <Card.Text> emploie : {el.job}</Card.Text>
                <Card.Text> entreprise : {el.society}</Card.Text>
                <Card.Text> periode : {el.dateExp}</Card.Text>
              </Card>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ConsultantProfil;
