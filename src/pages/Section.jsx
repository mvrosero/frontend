import React from "react";
import Card from 'react-bootstrap/Card';
import "./Section.css";

import { Link } from "react-router-dom";


const Section = () => {
  return (
    <div className="section-body">
      <div className="section-page">
        <div className="section-content">
          <div className="card-container">
              <Card className="section-card-one">
                  <Card.Body className="section-label">
                    <Link as={Link} to={"/education"}> Education </Link>
                  </Card.Body>
              </Card>
              <Card className="section-card-two">
                  <Card.Body className="section-label">
                    <Link as={Link} to={"/portfolio"}> Portfolio </Link>
                  </Card.Body>
              </Card>
              <Card className="section-card-three">
                  <Card.Body className="section-label">
                    <Link as={Link} to={"/blogs"}> Blogs </Link>
                  </Card.Body>
              </Card>
              <Card className="section-card-four">
                  <Card.Body className="section-label">
                    <Link as={Link} to={"/interests"}> Interests </Link>
                  </Card.Body>
              </Card>
              <Card className="section-card-five">
                  <Card.Body className="section-label">
                    <Link as={Link} to={"/about"}> About </Link>
                  </Card.Body>
              </Card>
              <Card className="section-card-six">
                  <Card.Body className="section-label">
                    <Link as={Link} to={"/contact"}> Contact </Link>
                  </Card.Body>
              </Card>
          </div>
       </div>
      </div>
    </div>
  );
};

export default Section;
