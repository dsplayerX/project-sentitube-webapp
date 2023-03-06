import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CustomFeedback } from "./CustomFeedbacks";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import PieChart from "../components/PieChart";

function Results() {
  const location = useLocation();
  const data = location.state;
  //console.log("parsed data" + data);
  const navigate = useNavigate();

  const sentimentChartData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Sentiment Analysis",
        data: [
          data["Positive Comments"],
          data["Neutral Comments"],
          data["Negative Comments"],
        ],
        backgroundColor: ["#2ecc71", "#3498db", "#e74c3c"],
      },
    ],
  };

  const sarcasmChartData = {
    labels: ["Sarcastic", "Non-Sarcastic"],
    datasets: [
      {
        label: "Sarcasm Analysis",
        data: [data["Sarcastic Comments"], data["Nonsarcastic Comments"]],
        backgroundColor: ["#f1c40f", "#9b59b6"],
      },
    ],
  };

  const handleButton = async (event) => {
    event.preventDefault();
    try {
      navigate("/PerCommentResults", { state: data });
    } catch (error) {
      console.log(error);
    }
  };

  ////
  console.log(data["CustomFeedbackNo"]);
  const feedbackItem = CustomFeedback.find(
    (item) => item.id === data["CustomFeedbackNo"]
  ); ////

  return (
    <div className="Result_page">
      <Container
        style={{
          color: "rgb(51,51,255)",
        }}
      >
        <h4>Final Result</h4>
        <Row
          style={{
            background:
              "linear-gradient(45deg, rgb(254, 0, 0), rgb(255, 255, 100))",
            color: "white",
            padding: "10px",
            margin: "6px",
          }}
        >
          <Col
            style={{
              fontFamily: "'Dosis', sans-serif",
              fontSize: "20px",
            }}
          >
            <p>Positve Comments : {data["Positive Comments"]}</p>
            <p>Neutral Comments : {data["Neutral Comments"]}</p>
            <p>Negative Comments : {data["Negative Comments"]}</p>
            <p>Sarcastic Comments : {data["Sarcastic Comments"]}</p>
            <p>Non-Sarcastic Comments : {data["Nonsarcastic Comments"]}</p>
            <p className="total">Total Comments -- {data["Total Comments"]}</p>
          </Col>
          <Col>
            <Button
              varient="flat"
              size="xl"
              style={{
                backgroundColor: "white",
                border: "4px",
                color: "red",
                borderRadius: "20px",
                borderColor: "black",
              }}
              onClick={handleButton}
            >
              Per Comment Results
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="chart-title">Sentiment Result</h5>
            <div style={{ width: 260 }}>
              <PieChart chartData={sentimentChartData} />
            </div>
          </Col>

          <Col>
            <h5 className="chart-title">Sarcasam Result</h5>
            <div style={{ width: 260 }}>
              <PieChart chartData={sarcasmChartData} />
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container
        style={{
          color: "black",
          margin: "10px auto",
        }}
      >
        <h4>Custom Feedback</h4>

        <p>{feedbackItem.text}</p>
      </Container>
    </div>
  );
}

export default Results;
