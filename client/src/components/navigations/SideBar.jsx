import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiServiceLine, RiContactsLine } from "react-icons/ri";
import { BiHomeHeart } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

const SideBar = ({ show }) => {
  return (
    <div className="sideBar">
      <div className="menu-toggle">
        <MdOutlineMenu />
      </div>
      <div className="asidebar-nav">
        <div className="asidebar-top">
          <NavLink to="/">
            <BiHomeHeart />
            {show && <span>Home</span>}
          </NavLink>
          <NavLink to="/about-us">
            <FaUsers />
            {show && <span>About Us</span>}
          </NavLink>
          <NavLink to="/services">
            <RiServiceLine />
            {show && <span>Services</span>}
          </NavLink>
          {/* <NavLink to="/events">
            <MdOutlineLocalActivity />
            {show && <span>Events</span>}
          </NavLink> */}
          <NavLink to="/contacts">
            <RiContactsLine />
            {show && <span>Contacts</span>}
          </NavLink>
        </div>
        <div className="asidebar-bottom">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/associationfarahintegrationenfantsautistes/"
          >
            <AiFillFacebook />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/association.farah/"
          >
            <AiFillInstagram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/association-farah-pour-autistes-6369b0171/"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
