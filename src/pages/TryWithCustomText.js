import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Modal, Spinner, Card } from "react-bootstrap";

function TryWithCustomText() {

  const [modalMessage, setModalMessage] = useState(null); // state variable for modal message
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [jsonData, setJsonData] = useState(null);

  const sentimentPredictions = jsonData && jsonData[0] && jsonData[0].sentiment_predictions;

  const getSentimentLabel = (predictions) => {
    if (predictions === 0) {
      return "Negative";
    } else if (predictions === 1) {
      return "Neutral";
    } else if (predictions === 2) {
      return "Positive";
    } else {
      return "Unknown";
    }
  };

  const sarcasmPredictions = jsonData && jsonData[0] && jsonData[0].sarcasm_predictions;

  const getSarcasmLabel = (predictions) => {
    if (predictions === 0) {
      return "Not Sarcastic";
    } else {
      return "Sarcastic";
    } 
  };

  const sentitubePredictions = jsonData && jsonData[0] && jsonData[0].sentitube_results;

  const getSentitubeLabel = (predictions) => {
    if (predictions === "negative") {
      return "Negative";
    } else if (predictions === "neutral") {
      return "Neutral";
    } else if (predictions === "positive") {
      return "Positive";
    } else {
      return "Unknown";
    }
  };

  const handleButtonClick = async (event) => {
    event.preventDefault();
    try {
      // Check if input value is empty
      if (!inputValue.trim()) {
        setModalMessage("Please enter a sentence or a paragraph to analyse!");
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
        <Button variant="primary" type="submit"  disabled={isAnalysing} 
          className="try-button-hover"
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      fontSize: "24px",
                      padding: "10px",
                      border: "none",
                      borderRadius: "20px",
                      width: "120px",
                      height: "60px",
                      transition: "background-color 0.3s ease-in-out",
                      margin: "auto",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      marginTop: "10px",
                      marginBottom: "10px",

                    }}>
          {isAnalysing ? (
            <>
              <Spinner animation="border" />
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
              Sentiment Predictions: {getSentimentLabel(sentimentPredictions)}
            </p>
            <p>
              Sarcasm Predictions: {getSarcasmLabel(sarcasmPredictions)}
            </p>
            <p>
              SentiTube Result: {getSentitubeLabel(sentitubePredictions)}
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
