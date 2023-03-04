import {useState} from "react";
//import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Row, Col} from 'react-bootstrap'

import PieChart from "../components/PieChart";
import { UserData } from "./Data";
import { UserData2 } from "./Data2";

function Results() {

  //00const location = useLocation
  //const data = location.state;

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.type),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.count),
        backgroundColor: [
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [userData2, setUserData2] = useState({
    labels: UserData2.map((data) => data.type),
    datasets: [
      {
        label: "Users Gained",
        data: UserData2.map((data) => data.count),
        backgroundColor: [
          "#50AF95",
          "#f3ba2f",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      App
      {/* <p>{data}</p> */}

      <Container
        style={{
          backgroundColor: 'rgb(204,204,255)',
          color:'rgb(51,51,255)'
        }}
      >
        <h4>Final Result</h4>
        <Row
        style={{
          backgroundColor: 'rgb(0,204,255)',
          color:'black'
        }}>
          <Col>
          
            <p>Positve Comments</p>
            <p>Neutral Comments</p>
            <p>Negative Comments</p>
            <p>Sarcastic Comments</p>
            <p>Nonsarcastic Comments</p>
            <p>Total Comments</p>
          
          </Col>
        </Row>
        <Row>

          <Col>
            <h5>Sentiment Result</h5>
            <div style={{ width: 260 }}>
              <PieChart chartData={userData} />
            </div>
          </Col>

          <Col>
            <h5>Sarcasam Result</h5>
            <div style={{ width: 260 }}>
              <PieChart chartData={userData2} />
            </div>
          </Col>

        </Row>

      </Container>
      <br></br>
      <Container
        style={{
          backgroundColor: 'rgb(51,51,255)',
          color:'white'
        }}
      >
        <h4>Custom Feedback</h4>
        
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, but also the leap 
          into electronic typesetting, remaining essentially unchanged. It was popularised
           in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
           and more recently with desktop publishing software like Aldus PageMaker including 
           versions of Lorem Ipsum.
        </p>

      </Container>
    </div>
  );
}

export default Results;
