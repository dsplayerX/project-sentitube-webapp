import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Row, Col, Button, Card, Form} from 'react-bootstrap'

import { MDBMedia } from 'mdbreact';

export const ContactUsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xjwjwwr",
        "template_445fzij",
        form.current,
        "eKt19qsgC23PDUezT"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
<div>
    <Container>

      <Row>
        <Col>

        <h4>Let's Chat</h4>
        <h5>Tell us about your thought about our page.</h5>
        


          

    <Row className="image-text-container" noGutters>
      <Col xs={6}>
      <i class="bi bi-envelope-at-fill"></i>
      </Col>
      <Col xs={6}>
        <h3 className="title">Email Us</h3>
        <p className="text">sentitube@gmail.com</p>
      </Col>
    </Row>



        </Col>


        <Col>
        <Form>
        <Form.Group controlId="from_name">
          <Form.Label>Name</Form.Label>
          <Form.Control type = "text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group controlId="from_email">
          <Form.Label>Email</Form.Label>
          <Form.Control type = "email" placeholder="Enter Your Email" />
          <Form.Text className='text-muted'>
            type
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control type = "textarea" placeholder="Enter Your Name" />
        </Form.Group>
        <Button varient='secondary' type='submit'>Send</Button>
      </Form>
        </Col>
      </Row>

    </Container>

    {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
<p>
        
      </p>
    </div>
  );
};
