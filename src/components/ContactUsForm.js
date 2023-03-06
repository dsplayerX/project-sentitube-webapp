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
      <Container>
        <Row>
          <Col>
            <Card className='nb-3' style={{color:"red"}}>
              <Card.Img  src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.searchenginejournal.com%2Fwp-content%2Fuploads%2F2022%2F06%2Fimage-search-1600-x-840-px-62c6dc4ff1eee-sej.png&imgrefurl=https%3A%2F%2Fwww.searchenginejournal.com%2Fbest-image-search-engines%2F299963%2F&tbnid=Pso-9ayGpy0KlM&vet=12ahUKEwiO667qn8D9AhW7hGMGHeecBC8QMygEegUIARDCAQ..i&docid=faQEvyb6ULMOUM&w=1600&h=840&itg=1&q=image&ved=2ahUKEwiO667qn8D9AhW7hGMGHeecBC8QMygEegUIARDCAQ"/>
              <Card.Body>
                <Card.Title>Card Exsample</Card.Title>
              <Card.Text>
                bootstrap
              </Card.Text>
              <Button varient='primary'>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Form ref={form} onSubmit={sendEmail}>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};
