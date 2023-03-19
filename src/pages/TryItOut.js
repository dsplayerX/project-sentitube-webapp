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
  const [numResults, setNumResults] = useState(300); // default value is 300
  const [orderResults, setOrderResults] = useState("Top comments"); // default value is to order comments by relavance

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
        .post("http://localhost:5000/analysisresults", {
          userinput: inputValue,
          numresults: numResults,
          orderresults: orderResults,
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

  const handleOrderResultsSelect = (order) => {
    // Update the order to get results when the user selects a value from the dropdown
    setOrderResults(order);
  };

  // Function to handle the closing of 'invalid youutbe link' popup
  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload(); // reloads the page on after closing popup
  };

  return (
    <>
      <div
        className="page-title"
        style={{ paddingTop: "10px", marginTop: "25px" }}
      >
        <center>
          <h2>
            <b>Sentiment and Sarcasm Analysis on YouTube Video Comments</b>
          </h2>
        </center>
      </div>
      <div>
        <Container
          className="tryitoutmain"
          style={{
            color: "black",
            marginTop: "120px",
          }}
        >
          <Form>
            <Form.Group controlId="formYoutubeLink">
              <Form.Control
                type="text"
                placeholder="Enter a YouTube video link"
                value={inputValue}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "rgb(255,240,220)",
                  maxWidth: 750,
                  margin: "10px auto",
                }}
              />
            </Form.Group>
            <Form.Group
              controlId="formOrderResults"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
              }}
            >
              <div style={{ margin: "20px auto" }}>
                <Form.Label style={{ paddingTop: "3%" }}>
                  Sort Comments By
                </Form.Label>
                <DropdownButton
                  id="order-results-dropdown"
                  title={`${orderResults}`}
                  variant="secondary"
                  style={{ margin: "0 90px 20px 90px", minWidth: "50px" }}
                >
                  <Dropdown.Item
                    onClick={() => handleOrderResultsSelect("Top comments")}
                  >
                    Top comments
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleOrderResultsSelect("Newest first")}
                  >
                    Newest first
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </Form.Group>
            <Form.Group
              controlId="formNumResults"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
              }}
            >
              <div style={{ margin: "20px auto" }}>
                <Form.Label style={{ paddingTop: "3%" }}>
                  Number of Comments to Analyse
                </Form.Label>
                <DropdownButton
                  id="num-results-dropdown"
                  title={`${numResults}`}
                  variant="secondary"
                  style={{ margin: "0 90px 20px 90px", minWidth: "50px" }}
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
              </div>
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
                  marginTop: "10px",
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
