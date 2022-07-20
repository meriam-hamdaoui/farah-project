import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { Nav, Card } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { fetchAdmin } from "../../api/fetchs";
import { setAdmin } from "../../JS/adminReducer";

const Admin = (props) => {
  const { children } = props;

  const theAdmin = useSelector((state) => state.admin);
  console.log("theAdmin => ", theAdmin);
  const dispatch = useDispatch();

  const getAdmin = async () => {
    const res = await fetchAdmin();
    console.log("getAdmin front =>", res);
    dispatch(setAdmin(res.admin));
  };

  useEffect(() => {
    getAdmin();
  }, [theAdmin]);

  return (
    <div>
      <div>
        {theAdmin.map((el) => (
          <Card key={uuidv4()}>
            <Card.Title>
              {el.firstName} {el.lastName}
            </Card.Title>
            <Card.Title>{el.email} </Card.Title>
          </Card>
        ))}
      </div>
      <div>
        <Nav style={{ display: "flex", justifyContent: "space-around" }}>
          <NavLink to="/dashboard">dashboard</NavLink>
          <NavLink to="/dashboard/children">enfants</NavLink>
          <NavLink to="/dashboard/parents">parents</NavLink>
          <NavLink to="/dashboard/consultants">consultants</NavLink>
        </Nav>
      </div>
      <div>
        <Outlet />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Admin;
