import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import './App.css'; 

import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import About from "./pages/About";
import API from "./pages/API";

import Navigation from "../src/pages/Navigation";
import Section from "../src/pages/Section";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import Interests from "./pages/Interests";

function App() {
  return (
    <Router>
      <div>
        <Navigation></Navigation>
        <Container className="mt-5">
          <Row>
            <Col md={12}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/api" element={<API />} />
                <Route path="/section" element={<Section />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/interests" element={<Interests />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
