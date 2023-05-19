import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Modal, Spinner, Card } from "react-bootstrap";

function TryWithCustomText() {
  const [modalMessage, setModalMessage] = useState(null); // state variable for modal message
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [jsonData, setJsonData] = useState(null);

  const navigate = useNavigate();

  const handleButtonClick = async (event) => {
    event.preventDefault();
    try {
      // Check if input value is empty
      if (!inputValue.trim()) {
        setModalMessage("Please enter a text string!");
        setShowModal(true);
        return;
      }

      // Set isAnalysing to true
      setIsAnalysing(true);

      const response = await axios.post("http://localhost:5000/customtextanalysis", {
        userinput: inputValue,
      });

      console.log(response.data);
      setJsonData(response.data); // Set the JSON data in the state
    } catch (error) {
      console.error(error);
      setModalMessage("Request failed! " + error.message);
      setShowModal(true);
    } finally {
      setIsAnalysing(false);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Form onSubmit={handleButtonClick} className="mt-5">
        <Form.Group controlId="inputText">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter text string"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isAnalysing}>
          {isAnalysing ? (
            <>
              <Spinner animation="border" size="sm" role="status" />
              <span className="ml-2">Analyzing...</span>
            </>
          ) : (
            "Analyze"
          )}
        </Button>
      </Form>

      {jsonData && (
        <Card className="mt-5">
          <Card.Body>
            <Card.Title>Results</Card.Title>
            {/* <pre>{JSON.stringify(jsonData, null, 2)}</pre> */}
            <p>
                Sentiment Predictions: {jsonData["0"]["sentiment_predictions"]}
            </p>
            <p>
                Sarcasm Predictions: {jsonData["0"]["sarcasm_predictions"]}
            </p>
            <p>
                Sentiment Predictions: {jsonData["0"]["sentitube_results"]}
            </p>
          </Card.Body>
        </Card>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default TryWithCustomText;
