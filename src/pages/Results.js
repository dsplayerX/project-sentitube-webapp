import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import PieChart from "../components/PieChart";

function Results() {
  const location = useLocation();
  const data = location.state;
  //console.log("parsed data" + data);

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

  return (
    <div className="App">
      <div>
        <h4>Results</h4>
      </div>
      <Container
        style={{
          backgroundColor: "rgb(204,204,255)",
          color: "rgb(51,51,255)",
        }}
      >
        <h4>Final Result</h4>
        <Row
          style={{
            backgroundColor: "rgb(0,204,255)",
            color: "black",
          }}
        >
          <Col>
            <p>Positve Comments {data["Positive Comments"]}</p>
            <p>Neutral Comments {data["Neutral Comments"]}</p>
            <p>Negative Comments {data["Negative Comments"]}</p>
            <p>Sarcastic Comments {data["Sarcastic Comments"]}</p>
            <p>Non-Sarcastic Comments {data["Nonsarcastic Comments"]}</p>
            <p>Total Comments {data["Total Comments"]}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Sentiment Result</h5>
            <div style={{ width: 260 }}>
              <PieChart chartData={sarcasmChartData} />
            </div>
          </Col>

          <Col>
            <h5>Sarcasam Result</h5>
            <div style={{ width: 260 }}>
              <PieChart chartData={sentimentChartData} />
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container
        style={{
          backgroundColor: "rgb(51,51,255)",
          color: "white",
        }}
      >
        <h4>Custom Feedback</h4>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Container>
    </div>
  );
}

export default Results;
