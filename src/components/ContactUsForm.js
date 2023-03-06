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
          color:"black"
        }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            name="from_name"
            isInvalid={!!formErrors.name}
          />
          {/* showing errors below the form input field */}
          {formErrors.name && (
            <Form.Control.Feedback type="invalid">
              {formErrors.name}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="from_email"
              isInvalid={!!formErrors.email}
            />
            {formErrors.email && (
              <Form.Control.Feedback type="invalid">
                {formErrors.email}
              </Form.Control.Feedback>
            )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            isInvalid={!!formErrors.message}
          />
          {formErrors.message && (
            <Form.Control.Feedback type="invalid">
              {formErrors.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button className="submit-button" value="Send" type="submit">
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
