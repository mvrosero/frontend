import React from "react";
import Button from 'react-bootstrap/Button';
import "./Home.css";


const Home = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <div>
        <div className="center-content">
        <h3>
              micha’s college life
          </h3>
          <Button className="custom-button" variant="outline-light" href="section"> VIEW </Button> 
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
