import React from "react";
import Button from "react-bootstrap/Button";
import home_img from "../images/denys-nevozhai-w7YCquMkv2c-unsplash.jpg";
import arrow from "../images/arrow-upper-right.png";
import { Image } from "react-bootstrap";
import "../CSS/home.css";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <div class="row">
        <div class="col-sm-12 col-md-6  welcome_note">
          <h1
            id="animate-h1"
            class="text-start animate__animated animate__fadeInLeft"
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
              color: "grey",
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
            Welcome to SentiTube! Our platform analyzes the sentiment of YouTube
            video comments to provide you with valuable insights into how
            viewers feel about the content they are watching. With our
            state-of-the-art sentiment analysis technology, you can quickly and
            easily understand the sentiment of commenters, whether it's
            positive, negative, or neutral. By analyzing the sentiment of
            YouTube video comments, we provide you with a powerful tool for
            understanding your audience's feedback and engagement. Try our
            sentiment analysis tool today and unlock the power of audience
            insights for your YouTube videos!
          </p>
          <div class="buttons d-flex justify-content-start">
            <Button
              class="btn btn-primary rounded-4"
              href="./#/TryItOut"
              variant="primary"
              style={{
                borderRadius: 20,
                backgroundColor: "red",
                border: "none",
                width: "10rem",
                padding: "1rem",
                marginRight: "1rem",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              TrySentiTube
              <Image
                src={arrow}
                alt="arrow"
                style={{
                  width: "15%",
                  marginBottom: 2,
                  paddingLeft: 5,
                }}
              />
            </Button>
            <Button variant="secondary" href="./#/ChromeExtension">
              Download Chrome Extention
            </Button>
          </div>
        </div>

        <div class="col-sm-12 col-md-5 home_img_div ps-md-5">
          <Image src={home_img} alt="home_img" fluid rounded />
        </div>
      </div>
    </div>
  );
}

export default Home;
