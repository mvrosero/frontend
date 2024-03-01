import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import { NavDropdown } from 'react-bootstrap';

import "./Navigation.css";

import myImage from '../components/images/xoxo_logo.png'

export const Navigation = () => {
  return (
    <div className="navigation-bar">
      <Nav>
        <div className="logo-pic">
        <img
              src={myImage}
              width="130"
              height="40"
              alt="xoxo logo"
            />
        </div>
          <Nav.Link as={Link} to={"/home"} className="text-decoration-none text-white">HOME</Nav.Link>
          <Nav.Link as={Link} to={"/education"} className="text-decoration-none text-white">EDUCATION</Nav.Link>
          <Nav.Link as={Link} to={"/about"} className="text-decoration-none text-white">ABOUT</Nav.Link>
          <Nav.Link as={Link} to={"/contact"} className="text-decoration-none text-white">CONTACT</Nav.Link>
          <Nav.Link as={Link} to={"/api"} className="text-decoration-none text-white">API</Nav.Link>
      </Nav>
    </div>
  );
};

export default Navigation;