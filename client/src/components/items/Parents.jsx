import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllParents } from "../../api/fetchs";
import { setParent } from "../../JS/parentReducer";
import UserCard from "../profils/UserCard";

const Parents = () => {
  const parents = useSelector((state) => state.parent);
  const dispatch = useDispatch();

  const getParents = async () => {
    const data = await fetchAllParents();
    dispatch(setParent(data));
  };
  useEffect(() => {
    getParents();
  }, [parents]);

  return (
    <>
      {parents.map((parent) => (
        <div key={uuidv4()}>
          <UserCard user={parent.user}>
            <Card.Text> Etat Civil : {parent.civil} </Card.Text>
            <Card.Text> Emploi : {parent.job} </Card.Text>
            <Card.Text> Nombre de familles : {parent.familyMembers} </Card.Text>
            <Card.Text> Mes demandes : {parent.demandes} </Card.Text>
          </UserCard>
        </div>
      ))}
    </>
  );
};

export default Parents;
