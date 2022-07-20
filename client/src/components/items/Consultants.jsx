import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
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
        <div key={uuidv4()}>
          <UserCard user={consultant.user}>
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
          </UserCard>
        </div>
      ))}
    </>
  );
};

export default Consultants;
