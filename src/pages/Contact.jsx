import * as React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "./Contact.css";

import phone from '../components/images/phone.png';
import social from '../components/images/social.png';
import email from '../components/images/email.png';


function Contact() {
  const cardsData = [
    {
      title: "Phone Number",
      text: "09055753247",
      imageSrc: phone
    },
    {
      title: "Social Media",
      text: "Facebook: Micha Rosero\nInstagram: @michaelavera_\nTwitter: @meechaelarosero",
      imageSrc: social
    },
    {
      title: "Email",
      text: "Personal: michaelarosero@gmail.com",
      imageSrc: email
    }
  ];

  return (
    <div className="contact-body">
      <h1 className="text-center mb-4">CONTACT</h1>
      <div className="d-flex justify-content-center">
        <Row xs={1} md={3} className="g-4">
          {cardsData.map((card, idx) => (
            <Col key={idx}>
              <Card className="contact-card">
                <Card.Img variant="top" src={card.imageSrc} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Contact;
