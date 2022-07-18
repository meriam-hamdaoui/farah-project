import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChildren } from "../../api/fetchs";
import { setChild } from "../../JS/childReducer";
import { Card } from "react-bootstrap";

const Children = () => {
  const children = useSelector((state) => state.child);
  const dispatch = useDispatch();

  const getChildren = async () => {
    const data = await fetchChildren();
    dispatch(setChild(data));
  };

  useEffect(() => {
    getChildren();
  }, [children]);

  return (
    <div>
      {children.map((child) => (
        <Card>
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
