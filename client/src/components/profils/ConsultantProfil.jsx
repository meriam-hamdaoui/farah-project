import React from "react";
import { Card } from "react-bootstrap";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

const ConsultantProfil = () => {
  const consultants = useSelector((state) => state.consultant);

  return (
    <div>
      {consultants.map((consultant) => (
        <UserCard key={consultant.user.id} user={consultant.user}>
          <div key={consultant.id}>
            <Card.Text> gender : {consultant.gender}</Card.Text>
            <Card.Text> domaine : {consultant.domain}</Card.Text>
            <Card.Text>
              niveau universitaire : {consultant.educations.degree}
            </Card.Text>
            <Card.Text>
              université : {consultant.educations.university}
            </Card.Text>
            <Card.Text>
              Date de diplome : {consultant.educations.graduation}
            </Card.Text>
            <Card.Text> offre : {consultant.offers} </Card.Text>
          </div>
        </UserCard>
      ))}
    </div>
  );
};

export default ConsultantProfil;
