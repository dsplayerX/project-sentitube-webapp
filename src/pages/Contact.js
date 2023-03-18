import React from "react";
import { Link } from "react-router-dom";
import { ContactUsForm } from "../components/ContactUsForm";
import {
  Form,
  Button,
  Image,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contact() {
  return (
    <Container>
      <Row style={{
        marginTop:"40px"
      }}>
         <h3 style={{color:"black", textAlign:"center"}}><b>We'd love to hear from you</b></h3>
        <Col style={{
          margin:"none",
          marginRight:"45px"
          
        }}>
         
          <Row
            style={{
              marginTop:"30px",
              width:"80%",

            }}
          >
              <div className="contact-container">
                <div className="logo">
                  <i class="bi bi-envelope-dash" style={{ fontSize: 40 }}></i>
                </div>
                <h4>Mail Us</h4>
                <h5>
                  <a href="mailto:sentitubebyphoenix@gmail.com">
                    sentitubebyphoenix@gmail.com
                  </a>{" "}
                </h5>
              </div>
          </Row>
        </Col>
        <Col>
        <ContactUsForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
