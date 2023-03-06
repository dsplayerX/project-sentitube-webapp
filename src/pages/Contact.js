import React from "react";
import { ContactUsForm } from "../components/ContactUsForm";
import { Form, Button, Modal, Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

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
          <Card className='nb-3'
            style={{
              backgroundColor:"rgb(51,204,51)",
              border:"2px green solid",
              borderRadius:"4px",
              width:"260px",
              marginTop:"80px"
             }}
          >
              <Card.Body 
                
              
              >
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
            </Card>
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
