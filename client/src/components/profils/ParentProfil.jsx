import React from "react";
import "./Profil.css";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import UpdateParent from "../forms/UpdateParent";
import ChildCard from "./ChildCard";
import { v4 as uuidv4 } from "uuid";
import Child from "../forms/Child";
import { useParams } from "react-router-dom";

const ParentProfil = () => {
  const parents = useSelector((state) => state.parent);
  const children = useSelector((state) => state.child);
  // console.log("parents =>", parents);
  // const [children, setChildren] = React.useState([]);
  const { id } = useParams();

  return (
    <div className="parent_profil">
      <div className="parent_details">
        {parents.map((parent) => (
          <UserCard key={parent.user.id} user={parent.user}>
            <Card.Text> Etat Civil : {parent.civil} </Card.Text>
            <Card.Text> Emploi : {parent.job} </Card.Text>
            <Card.Text> Nombre de familles : {parent.familyMembers} </Card.Text>
            <Card.Text> Mes demandes : {parent.demandes} </Card.Text>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <UpdateParent id={id} parent={parent} />
              <Child label={"ajouter un enfant"} />
            </div>
          </UserCard>
        ))}
      </div>
      <div>
        {children.length !== 0 ? (
          children.map((el) => {
            return <ChildCard key={uuidv4()} child={el} />;
          })
        ) : (
          <h1>compeleter votre profil par ajouter un enfant ou plus</h1>
        )}
      </div>
    </div>
  );
};

export default ParentProfil;
