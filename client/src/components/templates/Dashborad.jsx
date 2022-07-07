import React from "react";
import { Card, Button, Tabs, Tab } from "react-bootstrap";

const Dashborad = (props) => {
  const { children, details } = props;
  const { user } = details;
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="profile" title="Profile">
          <div>
            <Card className="sideBar">
              <Card.Img variant="top" src="holder.js/20px30" />
              <Card.Body>
                <Card.Title>{`${user.firstName} ${user.firstName}`}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>{user.phone}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"> </small>
                <Button>Edit</Button>
              </Card.Footer>
            </Card>
          </div>
        </Tab>
        <Tab eventKey="children" title="Children">
          {children}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashborad;
