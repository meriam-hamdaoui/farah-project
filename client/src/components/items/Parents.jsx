import React, { useEffect } from "react";
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
        <UserCard key={parent.user.id} user={parent.user}>
          <div key={parent.id}>
            <Card.Text> Etat Civil : {parent.civil} </Card.Text>
            <Card.Text> Emploi : {parent.job} </Card.Text>
            <Card.Text> Nombre de familles : {parent.familyMembers} </Card.Text>
            <Card.Text> Mes demandes : {parent.demandes} </Card.Text>
          </div>
        </UserCard>
      ))}
    </>
  );
};

export default Parents;
