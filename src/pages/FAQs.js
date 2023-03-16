import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

function FAQs() {
  const [isvisible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!isvisible);
  };

  return (
    <>
      <div className="page-title">
        <center>
          <h2>Frequently Asked Questions</h2>
        </center>
      </div>
      <MDBContainer
        className="mt-5"
        style={{
          maxWidth: "1000px",
          backgroundColor: "#f6bdbd",
          padding: "20px",
          borderRadius: "10px",
          margin: "20px auto 20px",
        }}
      >
        <MDBAccordion>
          <MDBAccordionItem collapseId={1} headerTitle="What is SentiTube?">
            SentiTube is a website and chrome extension that uses sentiment and
            sarcasm analysis to accurately analyze YouTube comments and provide
            SentiPositive and SentiNegative results along with all the analysis
            results, custom feedback based on positive-negative ratio and
            per-comment analysis results.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle="How does SentiTube work?"
          >
            SentiTube uses advanced natural language processing algorithms to
            analyze YouTube comments for sentiment and sarcasm. It then
            generates a report with the sentiment and sarcasm analysis, along
            with the SentiPositive and SentiNegative results and additionally
            offers users to view per-comment analysis results.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle="What is SentiPositive and SentiNegative?"
          >
            SentiPositive and SentiNegative are the new results generated by
            SentiTube. SentiPositive indicates that the sentiment of the comment
            is positive according to our logic, while SentiNegative indicates
            that the sentiment of the comment is negative.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={4}
            headerTitle="Is SentiTube free to use?"
          >
            Yes, SentiTube is completely free to use and it will remain free for
            the foreseeable future. You can use the website or the chrome
            extension to analyze YouTube comments without any charges or fees
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="Does SentiTube support analyzing comments on sites other than YouTube?"
          >
            Currently, SentiTube only supports analyzing comments on YouTube.
            However, we are exploring the possibility of expanding our tool to
            support other sites in the future.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="Can SentiTube analyze comments in languages other than English?"
          >
            Currently, SentiTube only analyzes comments in English. However, we
            would like to add support for emoticons and other languages in the
            future.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="How accurate is SentiTube?"
          >
            SentiTube uses state-of-the-art sentiment and sarcasm analysis
            algorithms, which are highly accurate. However, like any automated
            analysis tool, it may not be 100% accurate all the time. The
            accuracy of the sentiment analysis is 87.3% while the more
            challenging sarcasm detection analysis is 79% accurate.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="Is my data secure with SentiTube?"
          >
            Yes, we take data security and privacy very seriously. We do not
            collect, share or sell your data to third parties, and we always use
            industry-standard security protocols. Even in our analysis we only
            use publicly available YouTube comments.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="Can SentiTube analyze comments on any YouTube video?"
          >
            Yes, SentiTube can analyze comments on any public YouTube video. You
            can enter the YouTube video URL or use the chrome extension to
            analyze the comments and get results. However, YouTube videos with
            the comment section disabled and privated videos cannot be used in
            our analysis.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="Can SentiTube identify sarcasm in comments?"
          >
            Yes, SentiTube can identify sarcasm in comments using advanced
            natural language processing algorithms. The analysis report will
            show the sarcasm score along with other analysis results.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="How long does it take to analyze comments using SentiTube?"
          >
            SentiTube analyzes comments in real-time, so the analysis is usually
            completed within a few seconds. However, the processing time may
            vary depending on the number of comments selected and the length of
            the comments itself and the complexity of the analysis.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="Can I download the analysis report generated by SentiTube?"
          >
            Not directly from SentiTube, but you can download the analysis
            reports by saving the webpage as a PDF file.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="How can I provide feedback or report a bug with SentiTube?"
          >
            You can provide feedback or report a bug with SentiTube by
            contacting our team. You can send us a message or find the contact
            details on the Contact page of our website. We welcome any feedback
            or suggestions for improving our tool.
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
    </>
  );
}

export default FAQs;