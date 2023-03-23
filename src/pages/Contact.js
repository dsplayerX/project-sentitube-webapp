import React from "react";
import { ContactUsForm } from "../components/ContactUsForm";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contact() {
  return (
    <Container>
      <Row
        style={{
          minHeight: "650px",
          marginTop: "30px",
        }}
      >
        <Col
          style={{
            margin: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            className="contact-container"
            style={{
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                WebkitTextStroke: "0.1px black",
                fontSize: "40px",
                color: "black",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "-40px",
              }}
            >
              <b>
                We'd love <br />
                to hear
                <br /> from you
              </b>
            </h3>
            <div
              className="mail-us-container"
              style={{
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                backgroundColor: "#ff3232",
                padding: "25px 50px 25px 50px",
                borderRadius: "10px",
              }}
            >
              <div className="logo" style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}>
                <i  class="bi bi-envelope" style={{ fontSize: 40 }} fluid rounded></i>
              </div>
              <h4>Email Us</h4>
              <h5>
                <a href="mailto:sentitubebyphoenix@gmail.com">
                  sentitubebyphoenix@gmail.com
                </a>{" "}
              </h5>
            </div>
            <Link to="/FAQs">
              <Button
                type="button"
                class="btn btn-secondary"
                className="faq-button-hover" 
                style={{
                  backgroundColor: "grey",
                  padding: "5px",
                  width: "120px",
                  borderRadius: "10px",
                  margin: "10px",
                  border: "none",
                }}
              >
                Read FAQ's
              </Button>
            </Link>
          </div>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="contact-container"
            style={{
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              backgroundColor: "#e6e6e6",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <ContactUsForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
