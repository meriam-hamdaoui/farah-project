import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navigations/NavBar";
import SideBar from "./components/navigations/SideBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
// import Events from "./components/pages/Events";
import Contacts from "./components/pages/Contacts";
import Authentication from "./components/templates/Authentication";
// import Dashborad from "./components/templates/Dashborad";
import Signup from "./components/templates/Signup";
import Signin from "./components/auth/Signin";
import Parent from "./components/auth/Parent";
import Consultant from "./components/auth/Consultant";
import Copyright from "./components/footer/Copyright";
import ParentDash from "./components/dashbords/ParentDash.jsx";

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
        <div className="sticky">
          <NavBar />
        </div>

        <Routes>
          {/*  pages routes */}
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Services />} />
          {/* <Route path="events" element={<Events />} /> */}
          <Route path="contacts" element={<Contacts />} />
          {/* forms routes */}
          <Route
            path="sign-in"
            element={
              <Authentication label={"se connecter"}>
                <Signin />
              </Authentication>
            }
          />
          <Route
            path="sign-up/parent"
            element={
              <Signup>
                <Parent />
              </Signup>
            }
          />
          <Route
            path="sign-up/consultant"
            element={
              <Signup>
                <Consultant />
              </Signup>
            }
          />

          {/* private routes */}
          <Route path="parent/profil" element={<ParentDash />} />
        </Routes>
      </div>
      <div className="footer">
        <Copyright />
      </div>
    </div>
  );
}

export default App;
