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
    <div style={{ marginLeft: "10px", marginRight: "10px" }}>
      <div className="home">
        <Container className="Container">
          <Row>
            <Col sm={13} md={7} className="welcome_note">
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
                SentiTube analyzes the sentiment and sarcasm of YouTube video
                comments to provide you with valuable insights about the
                audience's feedback and engagement. By analyzing sarcasm as well
                as sentiment of YouTube video comments, we provide you with more
                accurate sentiment results. SentiTube alsp provides custom
                feedback and per comment analysis results. Whether you're a
                content creator looking to improve your videos or a YouTube user
                seeking to understand community's feedback towards a video,
                SentiTube is the tool you need.
              </p>
              <div
                class="buttons d-flex justify-content-start"
                style={{
                  marginLeft: "15px",
                  marginRight: "15px",
                  marginBottom: "15px",
                }}
              >
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
                    <Link
                      to="https://chrome.google.com/webstore/detail/jcmmdakdjipnccbfjdklabnomnjkilec?authuser=0&hl=en"
                      target="_blank"
                    >
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
    </div>
  );
}

export default Home;
