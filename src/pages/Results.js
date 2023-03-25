import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CustomFeedback } from "../components/CustomFeedbacks";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Doughnut from "../components/DoughnutChart";
import YoutubeEmbed from "../components/YoutubeFrame";

function Results() {
  const location = useLocation();
  const data = location.state;
  //console.log("parsed data" + data);
  const navigate = useNavigate();

  // Testing response
  console.log("Video Title: ", data["Video Title"]);
  console.log("Video Id: ", data["Video Id"]);

  // Doughnut chart data for sentitube results
  const finalsentiChartData = {
    labels: ["Positive", "Negative"],
    datasets: [
      {
        label: "SentiTube Result",
        data: [data["Sentitube Positve"], data["Sentitube Negative"]],
        backgroundColor: ["#009900", "#E92611"],
      },
    ],
  };

  // Doughnut chart data for sentiment results
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

  // Doughnut chart data for sarcasm results
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

  // This handleButton function handles the button click event and navigates to the PerCommentResults page
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
    <div style={{ marginLeft: "10px", marginRight: "10px" }}>
      <div className="Result_page">
        <Container
          style={{
            color: "rgb(51,51,255)",
            marginBottom: "40px",
            padding: "25px",
            backdropFilter: "blur(20px)",
            background: "rgba(255, 255, 255, 0.75)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          <Row
            style={{
              textAlign: "center",
              justifyContent: "center",
              marginBottom: "25px",
            }}
          >
            <Col>
              <div
                style={{
                  backgroundColor: "black",
                  padding: "25px",
                  borderRadius: "10px",
                  marginTop: "10px",
                  height: "100%",
                }}
              >
                <h5
                  style={{
                    backgroundColor: "#262626",
                    padding: "25px",
                  }}
                >
                  {data["Video Title"]}
                </h5>
                {/* <img
                src={`https://img.youtube.com/vi/${data["Video Id"]}/maxresdefault.jpg`}
                height={"auto"}
                width={"80%"}
                alt={"Thumbnail of " + data["Video Title"]}
              /> */}
                <YoutubeEmbed embedId={data["Video Id"]} />
                {/* https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api */}
              </div>
            </Col>

            <Col>
              <div
                style={{
                  height: "100%",
                  padding: "25px",
                  marginTop: "20px",
                }}
              >
                <h5 className="chart-title">SentiTube Result</h5>
                <div
                  style={{
                    width: 300,
                    margin: "40px auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Doughnut chartData={finalsentiChartData} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="chart-title">Sentiment Result</h5>
              <div
                style={{
                  width: 260,
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Doughnut chartData={sentimentChartData} />
              </div>
            </Col>

            <Col>
              <h5 className="chart-title">Sarcasam Result</h5>
              <div
                style={{
                  width: 260,
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Doughnut chartData={sarcasmChartData} />
              </div>
            </Col>
          </Row>
        </Container>

        <Container
          style={{
            color: "black",
            margin: "10px auto",
            backgroundColor: "whitesmoke",
            marginTop: "20px",

            borderRadius: "10px",
            padding: "25px",
            backdropFilter: "blur(20px)",
            background: "rgba(255, 255, 255, 0.75)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h4>Our Feedback</h4>

          <p
            className="feedback-box"
            style={{
              fontSize: "20px",
              textAlign: "left",
              margin: "10px",
            }}
          >
            {feedbackItem.text}
          </p>

          <h4>Final Results</h4>
          <Row
            style={{
              background: "rgba(255, 0, 0, 0.459)",
              color: "white",
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
            }}
          >
            <Row>
              <Col
                style={{
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                <h6>SentiTube Result</h6>
                <p>Senti Positve Comments : {data["Sentitube Positve"]}</p>
                <p>Senti Negative Comments : {data["Sentitube Negative"]}</p>
              </Col>
              <Col
                style={{
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                <h6>Sentiment Result</h6>
                <p>Positve Comments : {data["Positive Comments"]}</p>
                <p>Neutral Comments : {data["Neutral Comments"]}</p>
                <p>Negative Comments : {data["Negative Comments"]}</p>
              </Col>
              <Col
                style={{
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                <h6>Sarcasam Result</h6>
                <p>Sarcastic Comments : {data["Sarcastic Comments"]}</p>
                <p>Non-Sarcastic Comments : {data["Nonsarcastic Comments"]}</p>
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "20px",
              }}
            >
              <Col
                md={8}
                style={{
                  margin: "auto",
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "left",
                }}
              >
                <Button
                  varient="flat"
                  className="perbutton"
                  size="xl"
                  style={{
                    backgroundColor: "rgb(255, 0, 0)",
                    border: "4px",
                    color: "white",
                    borderRadius: "20px",
                    borderColor: "red",
                    textAlign: "left",
                    padding: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                  }}
                  onClick={handleButton}
                >
                  Per Comment Results
                </Button>
              </Col>
              <Col>
                <p className="total-comment-count">
                  Total Analysed Comments : {data["Total Comments"]}
                </p>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Results;
