import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import UserCard from "../profils/UserCard";
import { fetchAllConsultants } from "../../api/fetchs";
import { setConsultant } from "../../JS/consultantReducer";
import { useSelector, useDispatch } from "react-redux";

const Consultants = () => {
  const consultants = useSelector((state) => state.consultant);
  const dispatch = useDispatch();

  const getConsultants = async () => {
    const data = await fetchAllConsultants();
    dispatch(setConsultant(data));
  };

  useEffect(() => {
    getConsultants();
  }, [consultants]);

  return (
    <>
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
            <Card.Text> offre : {consultant.offres} </Card.Text>
          </div>
        </UserCard>
      ))}
    </>
  );
};

export default Consultants;
