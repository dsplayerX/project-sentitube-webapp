import React from "react";
import Button from "react-bootstrap/Button";
import home_img from "../images/denys-nevozhai-w7YCquMkv2c-unsplash.jpg";
import icon from "../images/chrome_icon.png";
import arrow from "../images/arrow-upper-right.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/home.css";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <Container className="Container">
        <Row>
          <Col sm={12} md={7} className="welcome_note">
            <h1
              id="animate-h1"
              class="text-start h1 animate__animated animate__fadeInLeft"
            >
              <b>
                Introducing{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  SentiTube
                </span>
              </b>
            </h1>
            <h2
              id="animate-h1"
              class="text-start animate__animated animate__fadeInLeft"
              style={{
                fontSize: 32,
                border: "none",
                color: "rgba(0, 0, 0, 0.637)",
              }}
            >
              Sentiment and Sarcasm Analysis on the YouTube Comment Section
            </h2>
            <p
              className="text-start animate__animated animate__fadeInLeft animate__delay-3"
              id="animate-p"
              style={{
                fontSize: 20,
                border: "none",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Welcome to SentiTube! Our platform analyzes the sentiments and
              sarcasms of YouTube video comments to provide you with valuable
              insights into how viewers feel about the content they are
              watching. With our state-of-the-art sentiment analysis technology,
              you can quickly and easily understand the feedback of commenters.
              By analyzing the sentiment of YouTube video comments, we provide
              you with a powerful tool for understanding the audience's feedback
              and engagement. Try our sentiment analysis tool today and unlock
              the power of audience insights for any YouTube video!
            </p>
            <div class="buttons d-flex justify-content-start">
              <Row>
                <Col>
                  <Link to="/TryItOut">
                    <Button
                      className="try-button-hover"
                      class="btn btn-primary rounded-4"
                      variant="primary"
                      style={{
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                        fontSize: 18,
                        borderRadius: 20,
                        backgroundColor: "red",
                        border: "none",
                        width: "200px",
                        padding: "1rem",
                        marginTop: "10px",
                        marginBottom: "10px",
                        marginLeft: "-15px",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      Try SentiTube
                      <Image
                        src={arrow}
                        alt="arrow"
                        style={{
                          width: "18px",
                          marginLeft: 4,
                          marginBottom: 2,
                          paddingLeft: 5,
                        }}
                      />
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/ChromeExtension">
                    <Button
                      variant="secondary"
                      style={{
                        fontSize: 15,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                        borderRadius: 20,
                        border: "none",
                        width: "300px",
                        padding: "1rem",
                        marginTop: "10px",
                        marginBottom: "10px",
                        marginLeft: "-15px",

                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon"
                        style={{
                          width: "30px",
                          marginLeft: 0,
                          marginBottom: 2,
                          marginRight: 5,
                        }}
                      />
                      Get Chrome Extention
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            sm={12}
            md={5}
            className="home_img_div ps-md-5 d-flex justify-content-center"
          >
            <Image
              src={home_img}
              alt="home_img"
              style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
              fluid
              rounded
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
