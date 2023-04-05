import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SentiLogicImg from "../images/sentitubelogictrans.png";
function SentiTubeLogic() {
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
          marginBottom: "10px",
        }}
      >
        <Col>
          <Row>
            <center>
              <h1>
                <b>Logic of SentiTube</b>
              </h1>
            </center>
          </Row>
          <Row>
            {" "}
            <p>
              SentiTube is an sentiment analysis tool that categorizes
              statements based on their sentiment and sarcasm. The sentiments
              can be positive (SentiPositive) or negative (SentiNegative),
              depending on the overall sarcastic tone of the statement.{" "}
              <p>
                SentiTube uses natural language processing (NLP) techniques and
                machine learning algorithms to analyze statements and determine
                their sentiment. It looks for keywords and phrases that indicate
                positive, neutral or negative sentiment, as well as context
                clues and tone of voice and words associated with sarcasm for
                sarcasm analysis.
              </p>
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <Image
              src={SentiLogicImg}
              alt="home_img"
              fluid
              style={{
                maxWidth: "800px",
                padding: "20px",
              }}
            />
          </Row>
          <Row>
            <h5>Positive Statements</h5>
            <p>
              A statement that expresses positive sentiment without sarcasm
              could be classified as clearly positive. However, in SentiTube's
              logic, a statement that is marked as positive by sentiment
              analysis but also identified as sarcastic by sarcasm analysis
              would be classified as negative. This is because SentiTube
              considers sarcasm to be a form of negation, and thus, sarcastic
              comments that express positive sentiment are not considered to be
              genuinely positive.
            </p>
          </Row>
          <Row>
            <h5>Negative Statements</h5>
            <p>
              A statement that expresses negative sentiment without sarcasm
              could be classified as clearly negative. A statement that
              expresses negative sentiment but is sarcastic is generally not
              considered a positive statement. Instead, it is considered a
              negative statement with a sarcastic tone. Sarcasm is often used to
              express negative sentiment in an indirect or ironic way, but the
              overall sentiment of the statement is still negative.
            </p>
          </Row>
          <Row>
            <h5>Neutral Statements</h5>
            <p>
              A statement that is neutral in sentiment and not sarcastic should
              be classified as neutral. A statement that is neutral in sentiment
              but sarcastic could be classified as negative or neutral,
              depending on the degree of sarcasm. However, in SentiTube's logic,
              a statement that is marked as neutral by sentiment analysis would
              be considered as still neutral in sentiment as we currently do not
              have a way to measure the degree of sarcasm. With more research,
              this might also be taken into account for Sentitube in the future.
            </p>
          </Row>
          <Row>
            <h5>For Your Information</h5>
            <p>
              SentiTube sentiment and sarcasm models were trained using
              publically available datasets. You can find them from the links
              below.
            </p>
            <p>
              Sentiment Analysis:{" "}
              <a
                href="https://www.kaggle.com/datasets/cosmos98/twitter-and-reddit-sentimental-analysis-dataset"
                target="_blank"
                rel="noreferrer"
              >
                Twitter and Reddit Sentimental analysis Dataset by Chaithanya
                Kumar
              </a>
            </p>
            <p>
              Sarcasm Analysis:{" "}
              <a
                href="https://www.kaggle.com/gcdatkin/news-headline-sarcasm-detection"
                target="_blank"
                rel="noreferrer"
              >
                News Headline Sarcasm Detection by Gabriel Atkin
              </a>{" "}
              <span style={{ fontSize: "smaller", color: "grey" }}>
                (Please note that identifying sarcasm is a tricky process and
                the accuracy of our sarcsam detection model is 78%. Sarcastic
                comments on YouTube can sometimes differ very much from sarcasm
                found on news headlines. This might sometimes result in wrongly
                identified sarcasm in comments, thus showing more negativity
                than reality. We are planning to add more accurate and
                in-context model for sarcasm detection in the future.)
              </span>
            </p>
            <p>
              <span style={{ fontSize: "smaller", color: "grey" }}></span>
            </p>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default SentiTubeLogic;
