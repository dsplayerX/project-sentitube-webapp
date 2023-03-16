import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Row, Col, Modal, Spinner } from "react-bootstrap";

function TryItOut() {
  const [modalMessage, setModalMessage] = useState(null); // state variable for modal message

  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [numResults, setNumResults] = useState(250); // default value is 100
  const navigate = useNavigate();

  const [isAnalysing, setIsAnalysing] = useState(false);

  // ---------------------- DOESN'T WORK YET ----------------------
  // intercepts the error response and use the message returned by server
  // axios.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     const errorMessage = error.response.data.message || error.message;
  //     return Promise.reject(new Error(errorMessage));
  //   }
  // );

  const handleButtonClick = async (event) => {
    event.preventDefault();
    try {
      const youtubeRegex =
        /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([a-zA-Z0-9_-]{11})(?:&list=([a-zA-Z0-9_-]+))?(?:&t=(\d+))?/;
      // /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/(watch\?v=)?([a-zA-Z0-9\-_]+)$/;
      if (!youtubeRegex.test(inputValue)) {
        // alert("Please enter a valid YouTube link");
        setModalMessage("Invalid YouTube link!");
        setShowModal(true);
        return;
      }

      // Set isAnalysing to true
      setIsAnalysing(true);

      const response = await axios
        .post("https://flask-production-06d2.up.railway.app/analysisresults", {
          userinput: inputValue,
          numresults: numResults,
        })
        .then((response) => {
          // Handle the response from the server
          console.log(response.data);
          navigate("/Results", { state: response.data });
        })
        .catch((error) => {
          // Handle errors that occur during the request
          console.error(error);
          console.log(error.message);
          setModalMessage(error.message + "!");
          setShowModal(true);
        });

      //console.log(response.data);
      // request succeeded, navigate to results page
      ///setResponseData(response.data);
    } catch (error) {
      // request failed, handle error
      console.error(error);
      console.log(error.message);

      setModalMessage(error.message);
      setShowModal(true);
    }
  };

  const handleInputChange = (event) => {
    // Update the input value when the user types in the input field
    setInputValue(event.target.value);
  };

  const handleNumResultsSelect = (num) => {
    // Update the number of results when the user selects a value from the dropdown
    setNumResults(num);
  };

  // Function to handle the closing of 'invalid youutbe link' popup
  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload(); // reloads the page on after closing popup
  };

  return (
    <>
      <div className="page-title">
        <center>
          <h2>Sentiment and Sarcasm analysis on YouTube videos.</h2>
        </center>
      </div>
      <div>
        <Container
          className="tryitoutmain"
          style={{
            color: "black",
            marginBottom: "100px",
          }}
        >
          <Form>
            <Form.Group
              controlId="formYoutubeLink"
              style={{
                marginBottom: "10px",
              }}
            >
              <Form.Control
                type="text"
                placeholder="Enter YouTube link"
                value={inputValue}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              controlId="formNumResults"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
              }}
            >
              <Form.Label>Number of Comments to Analyse:</Form.Label>
              <DropdownButton
                id="num-results-dropdown"
                title={`${numResults}`}
                variant="secondary"
              >
                <Dropdown.Item onClick={() => handleNumResultsSelect(100)}>
                  100
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNumResultsSelect(300)}>
                  300
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNumResultsSelect(500)}>
                  500
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNumResultsSelect(1000)}>
                  1000
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNumResultsSelect(2500)}>
                  2500
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNumResultsSelect(5000)}>
                  5000
                </Dropdown.Item>
              </DropdownButton>
            </Form.Group>

            <Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={handleButtonClick}
                disabled={isAnalysing}
                className="try-button-hover"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  fontSize: "28px",
                  padding: "10px",
                  border: "none",
                  borderRadius: "20px",
                  width: "150px",
                  height: "60px",
                  transition: "background-color 0.3s ease-in-out",
                  margin: "auto",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                {isAnalysing ? <Spinner animation="border" /> : "Analyse"}
              </Button>
            </Form.Group>
          </Form>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalMessage}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    </>
  );
}
export default TryItOut;
