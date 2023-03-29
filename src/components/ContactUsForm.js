import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ContactUsForm = () => {
  const [modalTitle, setModalTitle] = useState(null); // state variable for modal message
  const [modalMessage, setModalMessage] = useState(null); // state variable for modal message

  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const form = useRef();
  let serviceKey = "";
  let templateKey = "";
  let secretKey = "";

  // load secret keys from the Flask API
  fetch("http://localhost:5000/getemailsecrets")
    .then((response) => response.json())
    .then((data) => {
      serviceKey = data.serviceKey;
      templateKey = data.templateKey;
      secretKey = data.secretKey;
      console.log("Loaded emailing client.");
    })
    .catch((error) => {
      console.error("Error fetching email secrets:", error);
    });

  const sendEmail = (e) => {
    e.preventDefault();

    // Validating form and stores any error
    const errors = validateForm();

    if (serviceKey !== "") {
      if (Object.keys(errors).length === 0) {
        // If there are no errors proceed with message submission
        // EmailJS form submission
        emailjs.sendForm(serviceKey, templateKey, form.current, secretKey).then(
          (result) => {
            console.log(result.text);
            console.log("Contact us message sent.");
            setModalTitle("Message Sent");
            setModalMessage("Your message has been sent successfully.");
            setShowModal(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
      } else {
        setFormErrors(errors);
      }
    } else {
      setModalTitle("Server Down");
      setModalMessage(
        "The SentiTube API is temporarily down. Please try again in a while. We are sorry for the inconvenience caused."
      );
      setShowModal(true);
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
      <Form
        ref={form}
        onSubmit={sendEmail}
        style={{
          color: "black",
          padding: "16px",
          marginTop: "10px",
          marginBottom: "20px",
          borderRadius: "10px",
          textAlign: "left",
          width: "80%",
        }}
      >
        <center>
          <Form.Label
            style={{
              marginBottom: "25px",
            }}
          >
            <b
              style={{
                fontSize: "24px",
                color: "red",
              }}
            >
              Message Us
            </b>
          </Form.Label>
        </center>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Your Name"
            name="from_name"
            isInvalid={!!formErrors.name}
            style={{
              border: "none",
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
            placeholder="Your Email"
            name="from_email"
            isInvalid={!!formErrors.email}
            style={{
              border: "none",
            }}
          />
          {formErrors.email && (
            <Form.Control.Feedback type="invalid">
              {formErrors.email}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            placeholder="Your Message"
            name="message"
            rows={6}
            isInvalid={!!formErrors.message}
            style={{
              border: "none",
            }}
          />
          {formErrors.message && (
            <Form.Control.Feedback type="invalid">
              {formErrors.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button
          className="try-button-hover"
          value="Send"
          type="submit"
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            color: "black",
            backgroundColor: " rgba(255, 0, 0, 0.588)",
            padding: "5px",
            width: "120px",
            borderRadius: "10px",
            margin: "10px",
            border: "none",
          }}
        >
          Send
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
