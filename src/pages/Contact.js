import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { ContactUsForm } from "../components/ContactUsForm";
import { Form, Button, Image, Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {

  const location = useLocation();
  const data = location.state;

  const navigate = useNavigate();

  const handleButton = async (event) => {
    event.preventDefault();
    try{
      
      navigate("/FAQpage", {state:data})

    }catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      
      <Container>
        <Row>
          <Col>
            <Row
              style={{
                color:"black",
                fontSize:"36px",
                width:"60%",
                marginTop:"40px"              
              }}
            >
              <p>Tell Us About Our Web Page</p>
           </Row>

            <Row style={{             
              width:"60%",
              marginTop:"20px"
            }}
            >
              <div className="contact-container">
                <div className="logo"><i class="bi bi-envelope-at" style={{ fontSize: 40 }}></i></div>
                <h4>Mail Us</h4>
                <h5><a href="sentitubebyphoenix@gmail.com">sentitubebyphoenix@gmail.com</a> </h5>
              </div>
            </Row>
            <Row>
              <Button
                style={{
                  backgroundColor:"rgb(235, 178, 178)",
                  color:"red",
                  padding:"5px",
                  width:"100px",
                  borderRadius:"4px",
                  margin:"20px",
                  fontSize:"18px",
                  border:"none"
                }}
                onClick={handleButton}
              >FAQ+</Button>
            </Row>
          </Col>
          <Col
          style={{
            margin:"auto",
            display:"flex",
            justifyContent:"right",
            alignItems:"right" 
        }}>
           <ContactUsForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
