import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button } from "react-bootstrap";

export const ContactUsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Getting current values of fields
    const name = form.current.elements.from_name.value;
    const email = form.current.elements.from_email.value;
    const message = form.current.elements.message.value;

    // Checking if name and email are not empty
    if (!name || !email) {
      alert("Please provide your name and email address.");
      return;
    }

    // Checking if email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please provide a valid email address.");
      return;
    }

    // Checking if message is not empty
    if (!message) {
      alert("Please provide a message.");
      return;
    }

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
          alert("Message sent!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your name" name="from_name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="from_email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message" rows={3} />
      </Form.Group>
      <Button className="submit-button" value="Send" type="submit">
        Send
      </Button>
    </Form>
  );
};
