import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navigations/NavBar";
import SideBar from "./components/navigations/SideBar";
import Logs from "./components/joinUs/Logs";
import Signin from "./components/joinUs/Signin";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Events from "./components/pages/Events";
import Contacts from "./components/pages/Contacts";

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
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="events" element={<Events />} />
          <Route path="contacts" element={<Contacts />} />

          <Route path="join-us" element={<Logs />}>
            <Route index element={<Signin />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
