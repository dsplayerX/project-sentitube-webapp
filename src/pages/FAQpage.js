import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

function FAQpage() {
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
          margin: "20px auto 20px",
        }}
      >
        <MDBAccordion>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="Can I use this site to get a feedback about a facebook video"
          >
            No, You can't. Only for YouTube videoes.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle="Can I use this site to get a feedback about a facebook video"
          >
            No, You can't. Only for YouTube videoes.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle="Can I use this site to get a feedback about a facebook video"
          >
            No, You can't. Only for YouTube videoes.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={4}
            headerTitle="Can I use this site to get a feedback about a facebook video"
          >
            No, You can't. Only for YouTube videoes.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="Can I use this site to get a feedback about a facebook video"
          >
            No, You can't. Only for YouTube videoes.
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
    </>
  );
}

export default FAQpage;
