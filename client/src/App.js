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
import Signup from "./components/templates/Signup";
import Login from "./components/auth/Login";
import Parent from "./components/auth/Parent";
import Consultant from "./components/auth/Consultant";
import ParentProfil from "./components/profils/ParentProfil";
import PrivateRoute from "./components/auth/PrivateRoute";
import Child from "./components/forms/Child";
import Admin from "./components/profils/Admin";
import Children from "./components/items/Children";
import Parents from "./components/items/Parents";
import Consultants from "./components/items/Consultants";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <div>
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
                  <Login />
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
            {/* privater routes */}
            {/* admin dashbord */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/children"
              element={
                <PrivateRoute>
                  <Admin>
                    <Children />
                  </Admin>
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/parents"
              element={
                <PrivateRoute>
                  <Admin>
                    <Parents />
                  </Admin>
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/consultants"
              element={
                <PrivateRoute>
                  <Admin>
                    <Consultants />
                  </Admin>
                </PrivateRoute>
              }
            />

            {/* parent profil */}
            <Route
              path="/parent/profil"
              element={
                <PrivateRoute>
                  <ParentProfil>
                    <Child />
                  </ParentProfil>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
