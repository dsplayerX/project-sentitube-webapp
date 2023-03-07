import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button, Modal, Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

export const ContactUsForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validating form and stores any error
    const errors = validateForm();

    // If there are no errors proceed with message submission
    if (Object.keys(errors).length === 0) {
      // EmailJS form submission
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
            console.log("Contact us message sent.");
            setShowModal(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setFormErrors(errors);
    }
  };

  // Function to validate the form's content
  const validateForm = () => {
    const errors = {};

    // If name field is empty...
    if (!form.current.from_name.value.trim()) {
      errors.name = "Name is required";
    }

    // If email field is empty...
    if (!form.current.from_email.value.trim()) {
      errors.email = "Email is required";
    } else if (
      // validation to check the proper email formatting
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.current.from_email.value)
    ) {
      // If email is invalid...
      errors.email = "Invalid email address";
    }

    // If message field is empty...
    if (!form.current.message.value.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  // Function to handle the closing of 'message sent' popup
  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload(); // reloads the page on after closing popup
  };

  return (
    <>
      <Form ref={form} onSubmit={sendEmail}
        style={{
          color:"black",
          padding:"16px",
          marginTop:"10px",
          marginBottom:"20px",
          borderRadius:"10px",
          textAlign:"left",
          border:".5px red solid",
          width:"80%"
        }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Your Name"
            name="from_name"
            isInvalid={!!formErrors.name}
            style={{
              backgroundColor:"rgb(255,240,220)",
              border:"none"
            }}
          />
          {/* showing errors below the form input field */}
          {formErrors.name && (
            <Form.Control.Feedback type="invalid">
              {formErrors.name}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="Email"
              name="from_email"
              isInvalid={!!formErrors.email}
              style={{
                backgroundColor:"rgb(255,240,220)",
                border:"none"
              }}
            />
            {formErrors.email && (
              <Form.Control.Feedback type="invalid">
                {formErrors.email}
              </Form.Control.Feedback>
            )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message Us</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={6}
            isInvalid={!!formErrors.message}
            style={{
              backgroundColor:"rgb(255,240,220)",
              border:"none"
            }}
          />
          {formErrors.message && (
            <Form.Control.Feedback type="invalid">
              {formErrors.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button className="submit-button" value="Send" type="submit"
          style={{
            backgroundColor:"red",
            padding:"5px",
            width:"120px",
            borderRadius:"10px",
            margin:"10px"
          }}
        >
          Send
        </Button>
        </Form>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Message Sent</Modal.Title>
           </Modal.Header>
          <Modal.Body>Your message has been sent successfully.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
           </Modal.Footer>
        </Modal>

    </>
  );
};
