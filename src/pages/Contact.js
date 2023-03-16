import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
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
    <div>
      <Container>
        <Row>
          <Col>
            <Row
              style={{
                color: "black",
                fontSize: "36px",
                width: "60%",
                marginTop: "40px",
              }}
            >
              <p>
                <b>We'd love to hear from you</b>
              </p>
            </Row>

            <Row
              style={{
                width: "60%",
                marginTop: "20px",
              }}
            >
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
            </Row>
            <Row>
              <Button
                href="./#/FAQs"
                variant="secondary"
                style={{
                  backgroundColor: "rgb(235, 178, 178)",
                  color: "red",
                  padding: "5px",
                  width: "100px",
                  borderRadius: "4px",
                  margin: "20px",
                  fontSize: "18px",
                  border: "none",
                }}
              >
                FAQs
              </Button>
            </Row>
          </Col>
          <Col
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
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
