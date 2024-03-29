import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/about.css";

function About() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
    <Container
      style={{
        color: "black",
        backdropFilter: "blur(20px)",
        background: "rgba(255, 255, 255, 0.75)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        // marginLeft: "5%",
        // marginTop: "2.5%",
        // marginBottom: "2.5%",
        // marginRight: "5%",
        borderRadius: "20px",
        padding: "2.5%",
      }}
    >
      <Row>
        <Col>
        <div class="about" >
        <h1 class="thick" style={{ color: "black" }}>
          <center>
            <b>What is SentiTube ?</b>
          </center>
        </h1>
        <p
          style={{
            // backdropFilter: "blur(20px)",
            // background: "rgba(210, 210, 210, 0.226)",
            fontSize: 18,
            paddingTop: "1%",
            borderRadius: "20px",
          }}
        >
          SentiTube is a powerful tool that provides sentiment analysis of
          YouTube video comments, offering users insightful information on
          viewer engagement. Developed by "phoeniX", a group of 2nd year
          undergraduate students following Software Engineering at University of
          Westminster, SentiTube utilizes advanced natural language processing
          algorithms to analyze comments for sentiment and sarcasm. With
          SentiPositive and SentiNegative results, along with customized
          feedback based on the positive-negative ratio and per-comment analysis
          results, SentiTube is an excellent resource for anyone looking to gain
          a deeper understanding of their YouTube audience. Whether using the
          website or chrome extension, SentiTube is completely free and
          available for everyone to use without any charges or fees.
          <center>
            <Link to="/SentiTubeLogic" onClick={handleClick}>
              <button class="button" style={{ marginTop: "1.5%" }}>
                Read about logic of SentiTube
              </button>
            </Link>
          </center>
        </p>
      </div>
      <div class="about">
        <h1
          class="thick"
          style={{
            color: "black",

          }}
        >
          <center>Who are we ?</center>
        </h1>
        <p
          style={{
            // boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            // backdropFilter: "blur(20px)",
            fontSize: 18,
            paddingTop: "1%",
            borderRadius: "20px",
          }}
        >
          We are "phoeniX", a team of 2nd year undergraduate students following
          Software Engineering at University of Westminster. We developed
          SentiTube as our SDGP (Software Development Group Project) with the
          goal of providing a tool that offers accurate sentiment and sarcasm
          analysis of YouTube comments, providing users with insightful feedback
          on viewer engagement. With SentiTube, we aimed to create a valuable
          resource for anyone looking to gain a deeper understanding of their
          YouTube audience, and we are proud to offer this tool completely free
          of charge.
          <center>
            <Link to="/MeetTheTeam" onClick={handleClick}>
              <button class="button" style={{ marginTop: "1.5%" }}>
                Meet The Team
              </button>
            </Link>
          </center>
        </p>
      </div>
      <br />

      <Row className="row-cols-desktop row-cols-mobile" style={{paddingLeft:"5%", paddingRight:"5%"}}>
        <Col className="col-desktop" style={{marginBottom:"2%"}}>
          <div class="cardab" align="justify">
            <div>
              <h3 class="thick" style={{ color: "red" }}>
                Our Vision
              </h3>
              <img src="https://cdn-icons-png.flaticon.com/256/8672/8672987.png" alt="Vision Image" width={"120px"} style={{margin:"2%"}}/>

              <p style={{ fontSize: 18 }}>
              We believe that by empowering content creators and YouTube users with these valuable insights, we can enhance the overall video viewing experience and drive continuous improvement in content creation.
              </p>
            </div>
          </div>
        </Col>

        <Col className="col-desktop" style={{marginBottom:"2%"}}>
          <div class="cardab" align="justify">
            <div>
              <h3 class="thick" style={{ color: "red" }}>
                Our Mission
              </h3>
              <img src="https://cdn-icons-png.flaticon.com/512/1592/1592505.png" alt="Mission Image" width={"100px"} style={{margin:"2%"}}/>
              <p style={{ fontSize: 18 }}>
              We are dedicated to creating a platform that not only identifies sentiments but also recognizes the subtle nuances of sarcasm through advanced sentiment and sarcasm analysis. Our ultimate goal is to provide a seamless and enjoyable user experience helping users uncover and unleash YouTube video feedback insights.
              </p>
            </div>
          </div>
        </Col>
      </Row>
        
        </Col>
      </Row>
      

      <br />
    </Container>
    </div>
  );
}

export default About;
