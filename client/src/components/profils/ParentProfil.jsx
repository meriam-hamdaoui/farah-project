import React, { useEffect } from "react";
import "./Profil.css";
import UserCard from "./UserCard";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import UpdateParent from "../forms/UpdateParent";
import ChildCard from "./ChildCard";
import { v4 as uuidv4 } from "uuid";
import Child from "../forms/Child";
import { useParams } from "react-router-dom";
import { fetchParent } from "../../api/fetchs";
import { setAccountParent } from "../../JS/accountParent";

const ParentProfil = () => {
  const parent = useSelector((state) => state.accountParent);
  // const children = useSelector((state) => state.child);

  const dispatch = useDispatch();

  const getProfil = async () => {
    const res = await fetchParent();
    console.log("res =>", res);
    dispatch(setAccountParent(res.profil));
  };

  useEffect(() => {
    getProfil();
  }, []);

  return (
    <div className="parent_profil">
      <div className="parent_details">
        <UserCard key={uuidv4()} user={parent.user}>
          <Card.Text> Etat Civil : {parent.civil} </Card.Text>
          <Card.Text> Emploi : {parent.job} </Card.Text>
          <Card.Text> Nombre de familles : {parent.familyMembers} </Card.Text>
          <Card.Text> Mes demandes : {parent.demandes} </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <UpdateParent parent={parent} />
            <Child label={"ajouter un enfant"} />
          </div>
        </UserCard>
      </div>
      {/* <div>
        {children.length !== 0 ? (
          children.map((el) => {
            return <ChildCard key={uuidv4()} child={el} />;
          })
        ) : (
          <h1>compeleter votre profil par ajouter un enfant ou plus</h1>
        )}
      </div> */}
    </div>
  );
};

export default ParentProfil;
