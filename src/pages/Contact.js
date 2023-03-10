import React from "react";
import { ContactUsForm } from "../components/ContactUsForm";
import { Form, Button, Image, Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
  return (
    <div>
      
      <Container
        style={{
          marginTop:"10px"
        }}
      >
        <Row>
          <Col>
          <Col
            style={{
              color:"black",
              fontSize:"36px",
              margin:"40px",
              width:"280px"
            }}
          >
            <p>Tell Us About Our Web Page</p>
          </Col>
          <Col
            style={{
              marginTop:"60px",
              textAlign:"left"
            }}
          >
            
              <div className="contact-container">
                <div className="logo"><i class="bi bi-envelope-at-fill" style={{ fontSize: 40 }}></i>
</div>
                <div className="contacy-title">
                  <h4>Mail Us</h4>
                  <h5>sentitube@gmail.com</h5>
                </div>
              </div>
          </Col>
            
          
          {/* <Card className='nb-3'
            style={{
              backgroundColor:"rgb(51,204,51)",
              border:"2px green solid",
              borderRadius:"4px",
              width:"260px",
              marginTop:"80px"
             }}
          >
              <Card.Body >
                <Card.Title
                 style={{
                  fontSize:"20px",
                  color:"black"
                 }}
                >
                  📧 - Email Us</Card.Title>
              <Card.Text
               style={{
                fontSize:"18px",
                color:"black"
               }}
              >
                sentitube@gmail.com
              </Card.Text>
              </Card.Body>
            </Card> */}
            
          </Col>
          <Col>
          <ContactUsForm />
          </Col>
        </Row>
      </Container>

      
    </div>
  );
}

export default Contact;
