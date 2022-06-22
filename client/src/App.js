import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navigations/NavBar";
import SideBar from "./components/navigations/SideBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Events from "./components/pages/Events";
import Contacts from "./components/pages/Contacts";
import JoinUs from "./components/joinUs/JoinUs";
import Signin from "./components/joinUs/Signin";
import Signup from "./components/joinUs/Signup";
import Parent from "./components/forms/Parent";

function App() {
  const [show, setShow] = useState(false);

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
          {/*  pages routes */}
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="events" element={<Events />} />
          <Route path="contacts" element={<Contacts />} />
          {/* forms routes */}
          <Route path="join-us" element={<JoinUs />}>
            <Route index element={<Signin />} />
            <Route path="sign-in" element={<Signin />} />
            <Route path="sign-up" element={<Signup />} />
          </Route>
          <Route path="/register/parent" element={<Parent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
