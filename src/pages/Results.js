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

  const finalsentiChartData = {
    labels: ["Positive", "Negative"],
    datasets: [
      {
        label: "SentiTube Result",
        data: [
          data["Sentitube Positve"],
          data["Sentitube Negative"],
        ],
        backgroundColor: ["#009900", "#E92611"],
      },
    ],
  };

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
          marginBottom:"20px"
        }}
      >
        
        <Row 
          style={{ 
            textAlign: "center",
            justifyContent: "center",
            marginBottom:"10px"
          }}
        >
            <h5 className="chart-title1">SentiTube Result</h5>
            <div style={{ width: 340 }}>
              <PieChart chartData={finalsentiChartData} />
            </div>
        </Row>
        <Row>
          <Col>
            <h5 className="chart-title">Sentiment Result</h5>
            <div style={{ width: 260 }}>
              <PieChart chartData={sentimentChartData}/>
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
      
      <Container
        style={{
          color: "black",
          margin: "10px auto",
        }}
      >
        <h4>Custom Feedback</h4>

        <p className="feedback-box">{feedbackItem.text}</p>

        <h4>Final Result</h4>
        <Row
          style={{
            background:
              "linear-gradient(45deg, rgb(254, 0, 0), rgb(255, 201, 100))",
            color: "white",
            padding: "10px",
            margin: "6px",
          }}
        >
          <Row>
          <Col
            style={{
              fontFamily: "'Dosis', sans-serif",
              fontSize: "20px",
              textAlign:"left"
            }}
          >
            <h6>Final Senti Result</h6>
            <p>Senti Positve Comments : {data["Sentitube Positve"]}</p>
            <p>Senti Negative Comments : {data["Sentitube Negative"]}</p>
          </Col>
          <Col
          style={{
            fontFamily: "'Dosis', sans-serif",
            fontSize: "20px",
            textAlign:"left"
          }}
          >
            <h6>Sentiment Result</h6>
            <p>Positve Comments : {data["Positive Comments"]}</p>
            <p>Neutral Comments : {data["Neutral Comments"]}</p>
            <p>Negative Comments : {data["Negative Comments"]}</p></Col>
          <Col
          style={{
            fontFamily: "'Dosis', sans-serif",
            fontSize: "20px",
            textAlign:"left"
          }}
          >
            <h6>Sarcasam Result</h6>
            <p>Sarcastic Comments : {data["Sarcastic Comments"]}</p>
            <p>Non-Sarcastic Comments : {data["Nonsarcastic Comments"]}</p></Col>
          </Row>
          <Row
          style={{
            marginTop:"20px"
          }}
          >                   
            <Col>
              <Button
                varient="flat"
                size="xl"
                style={{
                  backgroundColor: "rgb(255,255,102)",
                  border: "4px",
                  color: "red",
                  borderRadius: "20px",
                  borderColor: "red",
                }}
                onClick={handleButton}
              >
                Per Comment Results
              </Button>
            </Col>
            <Col>
          <p className="total">Total Comments -- {data["Total Comments"]}</p>

          </Col>
          </Row>
          
        </Row>

      </Container>
    </div>
  );
}

export default Results;
