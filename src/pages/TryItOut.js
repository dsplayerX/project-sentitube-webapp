import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function TryItOut() {
  const [inputValue, setInputValue] = useState("");
  const [numResults, setNumResults] = useState(250); // default value is 100
  const navigate = useNavigate();

  const [isAnalysing, setIsAnalysing] = useState(false);

  const handleButtonClick = async (event) => {
    event.preventDefault();
    try {
      const youtubeRegex =
        /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/;
      if (!youtubeRegex.test(inputValue)) {
        alert("Please enter a valid YouTube link");
        return;
      }

      // Set isAnalysing to true
      setIsAnalysing(true);

      const response = await axios
        .post("http://localhost:5000/analysisresults", {
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
        });

      console.log(response.data);
      // request succeeded, navigate to results page
      ///setResponseData(response.data);
    } catch (error) {
      // request failed, handle error
      console.error(error);
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

  return (
    <Container className="tryitoutmain" style={{ color: "black" }}>
      <Form>
        <Form.Group controlId="formYoutubeLink">
          <Form.Label>YouTube Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter YouTube link"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formNumResults">
          <Col>
            <Row>
              <Form.Label>Number of Results</Form.Label>
            </Row>
            <Row>
              <DropdownButton
                id="num-results-dropdown"
                title={`${numResults}`}
                variant="secondary"
              >
                <Dropdown.Item onClick={() => handleNumResultsSelect(100)}>
                  100
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNumResultsSelect(250)}>
                  250
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNumResultsSelect(500)}>
                  500
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNumResultsSelect(1000)}>
                  1000
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleNumResultsSelect(5000)}>
                  5000
                </Dropdown.Item>
              </DropdownButton>
            </Row>
          </Col>
        </Form.Group>

        <Form.Group>
          <Button
            variant="primary"
            onClick={handleButtonClick}
            disabled={isAnalysing}
          >
            {isAnalysing ? "Analyzing..." : "Analyze"}
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
export default TryItOut;
