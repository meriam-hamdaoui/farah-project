import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { fetchChildren } from "../../api/fetchs";
import { setChildReducer } from "../../JS/childReducer";
import { Card } from "react-bootstrap";

const Children = () => {
  const children = useSelector((state) => state.child);
  const dispatch = useDispatch();

  const getChildren = async () => {
    const data = await fetchChildren();
    dispatch(setChildReducer(data));
  };

  useEffect(() => {
    getChildren();
  }, [children]);

  return (
    <div>
      {children.map((child) => (
        <Card key={uuidv4()}>
          <button>delete</button>
          <div>
            <Card.Img variant="top" src="/avatar.png" className="circle-img" />
            <Card.Title>
              {child.gender} : {child.childFName}&nbsp;{child.ChildLName}
            </Card.Title>
          </div>
          <div>
            <Card.Body>
              <Card.Text>date de naissance : {child.birthDate}</Card.Text>
              <Card.Text>
                type de disorder : {child.diagnosis.disorder} <br />
                etablisement : {child.diagnosis.establishment}
                <br />
                date de diagnostic : {child.diagnosis.date}
              </Card.Text>
              {child.integration.integrated && (
                <Card.Text>integrer à : {child.integration.school}</Card.Text>
              )}
            </Card.Body>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Children;
