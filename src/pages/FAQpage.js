import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


function FAQpage() {
  return (
    <div className='faq-page'>
      <h2>Frequently Asked Questions</h2>

      <Container style={{
        margin:"auto",
        textAlign:"center",
        justifyContent:"center"
      }}>
        <Row>
          <div className='faq-box'>
            <h6>Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom</h6>
            <i class="bi bi-plus" style={{ 
              fontSize: 20,
              margin:"auto",
              display:"flex",
              textAlign:"right",
              justifyContent:"right" 
            }}></i>
          </div>
        </Row>
        <Row>
          <div className='faq-box'>
              <h6>Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom</h6>
              <i class="bi bi-plus" style={{ 
                fontSize: 20,
                margin:"auto",
                display:"flex",
                textAlign:"right",
                justifyContent:"right" 
              }}></i>
            </div>
        </Row>
        <Row>
          <div className='faq-box'>
            <h6>Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom</h6>
            <i class="bi bi-plus" style={{ 
              fontSize: 20,
              margin:"auto",
              display:"flex",
              textAlign:"right",
              justifyContent:"right" 
            }}></i>
          </div>
        </Row>
        <Row>
          <div className='faq-box'>
              <h6>Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom</h6>
              <i class="bi bi-plus" style={{ 
                fontSize: 20,
                margin:"auto",
                display:"flex",
                textAlign:"right",
                justifyContent:"right" 
              }}></i>
            </div>
        </Row>
      </Container>

    </div>
  )
}

export default FAQpage