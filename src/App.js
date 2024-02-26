import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Nav from 'react-bootstrap/Nav';
import Col from "react-bootstrap/Col";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import About from "./pages/About";
import Home from "./pages/Home";
import API from "./pages/API";


function App() {
  return (
    <div>
      <Router>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"} className="text-decoration-none text-white">Home</Nav.Link>
            <Nav.Link as={Link} to={"/education"} className="text-decoration-none text-white">Education</Nav.Link>
            <Nav.Link as={Link} to={"/about"} className="text-decoration-none text-white">About</Nav.Link>
            <Nav.Link as={Link} to={"/contact"} className="text-decoration-none text-white">Contact</Nav.Link>
            <Nav.Link as={Link} to={"/api"} className="text-decoration-none text-white">API</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
      <Container className="mt-5">
          <Row>
              <Col md={12}>
                <Routes>
                  <Route path="/home" element={<Home />}/>
                  <Route path="/education" element={<Education />}/>
                  <Route path="/about" element={<About />}/>
                  <Route path="/contact" element={<Contact />}/>
                  <Route path="/api" element={<API />}/>
                </Routes>
              </Col>
          </Row>
      </Container>

      </Router>
    </div>
  );
}

export default App;
