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
    <div className="contsct-page">
      <Container>
        <Row>
          <Col style={{
                color: "black",
                fontSize: "36px",
                width: "40%",
                marginRight: "16px",
                marginTop:"20px"
              }}>
            
              <p>
                <b>We'd love to hear from you</b>
              </p>
           
              <div className="contact-container">
                <div className="logo">
                  <i class="bi bi-envelope-at" style={{ fontSize: 40 }}></i>
                </div>
                <h4>Mail Us</h4>
                <h5>
                  <a href="sentitubebyphoenix@gmail.com">
                    sentitubebyphoenix@gmail.com
                  </a>{" "}
                </h5>
              </div>
           
              <Link to="/FAQs">
                <Button
                  variant="secondary"
                  style={{
                    backgroundColor: "rgb(235, 178, 178)",
                    color: "red",
                    padding: "5px",
                    width: "100px",
                    borderRadius: "4px",
                    fontSize: "18px",
                    border: "none",
                  }}
                >
                  FAQs
                </Button>
              </Link>
            
          </Col>
          <Col
            style={{
              margin: "10px",
              display: "flex",
                width: "60%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ContactUsForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
