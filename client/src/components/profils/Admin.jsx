import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Nav, Card } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { fetchAdmin } from "../../api/fetchs";
import { setAdmin } from "../../JS/adminReducer";

const Admin = (props) => {
  const { children } = props;

  const theAdmin = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const getAdmin = async () => {
    const res = await fetchAdmin();
    dispatch(setAdmin(res));
  };

  useEffect(() => {
    getAdmin();
  }, [theAdmin]);

  return (
    <div>
      <div>
        <Card>
          <Card.Title>
            {theAdmin.firstName} {theAdmin.lastName}
          </Card.Title>
          <Card.Title>{theAdmin.email} </Card.Title>
        </Card>
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
