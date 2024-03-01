import * as React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Education.css";

export const Education = () => {
  return (
    <div className="education-body">
        <h1> EDUCATION </h1>
        <div className="education-tabs">
           <Tabs defaultActiveKey="pre-school" justify className="custom-tabs">
              <Tab eventKey="pre-school" title="Pre-School">
                Tab content for Home
              </Tab>
              <Tab eventKey="elementary" title="Elementary">
                Tab content for Profile
              </Tab>
              <Tab eventKey="junior-hs" title="Junior High School">
                Tab content for Loooonger Tab
              </Tab>
              <Tab eventKey="senior-hs" title="Senior High School">
                Tab content for Contact
              </Tab>
              <Tab eventKey="college" title="College">
                Tab content for Contact
              </Tab>
            </Tabs>
        </div>
    </div>
  );
}

export default Education;
