import React from "react";
//import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Row, Col} from 'react-bootstrap'


function Results() {

  //00const location = useLocation
  //const data = location.state;

  return (
    <div>
      <h1>😁😐😩SentiTube😁😐😩</h1>
      {/* <p>{data}</p> */}

      

      <Container
        style={{
          backgroundColor: 'rgb(51,51,255)',
          color:'white'
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
