import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navigations/NavBar";
import SideBar from "./components/navigations/SideBar";
import Logs from "./components/joinUs/Logs";
import Signin from "./components/joinUs/Signin";
import Signup from "./components/joinUs/Signup";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Events from "./components/pages/Events";
import Contacts from "./components/pages/Contacts";
import Parent from "./components/forms/Parent";
import Consultant from "./components/forms/Consultant";
import CheckUser from "./components/joinUs/CheckUser";

function App() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    parent: true,
    consultant: false,
  });

  const onCheck = (e) => {
    const { name } = e.target;
    if (name === "parent") {
      setUser({
        parent: true,
        consultant: false,
      });
      // console.log(user.parent, user.consultant);
    }
    if (name === "consultant") {
      setUser({
        parent: false,
        consultant: true,
      });
      // console.log(user.parent, user.consultant);
    }
  };

  const handleChange = (e, prevValues) => {
    const { name, value } = e.target;
    return { ...prevValues, [name]: value };
  };
  return (
    <div className="App">
      <div
        className="sideBar"
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <SideBar show={show} />
      </div>

      <div className="main" style={{ marginLeft: show ? "10%" : "5%" }}>
        <NavBar />
        <Routes>
          {/* pages routes */}
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="events" element={<Events />} />
          <Route path="contacts" element={<Contacts />} />
          {/* forms routes */}
          <Route path="join-us" element={<Logs />}>
            <Route index element={<Signin />} />
            <Route path="sign-in" element={<Signin />} />
            <Route
              path="sign-up"
              element={
                <Signup
                  user={user}
                  onCheck={onCheck}
                  handleChange={handleChange}
                >
                  <CheckUser
                    user={user}
                    onCheck={onCheck}
                    handleChange={handleChange}
                  />
                </Signup>
              }
            />
          </Route>
          <Route path="register/parent" element={<Parent />} />
          <Route path="register/consultant" element={<Consultant />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
