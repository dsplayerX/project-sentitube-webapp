import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import footerlogo from "../images/footer-logo.png";

function Footer() {
  return (
    <div className="main_footer" style={{ backgroundColor: "black" }}>
      <div
        className="footer_middle"
        class="p-3 mb-2 "
        style={{ backgroundColor: "black" }}
      >
        <div className="Container" style={{ backgroundColor: "black" }}>
          <div
            className="row"
            style={{
              backgroundColor: "black",
            }}
          >
            {/*Colomns 1*/}
            <div
              className="col-md-3 col-sm-3"
              style={{
                display: "flex",
                justifyContent: "left",
              }}
            >
              <img
                src={footerlogo}
                alt="FooterLogo"
                className="footerlogo"
                style={{
                  height: "120px",
                  width: "auto",
                  marginTop: "15%",

                  marginLeft: "20px",
                }}
              />
            </div>

            {/*Colomns 2*/}
            <div className="col-md-3 col-sm-3">
              <h4>Menu</h4>
              <ul className="list_unstyled">
                <li>
                  <Link to="/" className="link-name">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/TryItOut" className="link-name">
                    TrySentiTube
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="link-name">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="link-name">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/*Colomns 3*/}
            <div className="col-md-3 col-sm-3">
              <h4>Resources</h4>
              <ul className="list_unstyled">
                <li>
                  {" "}
                  <Link to="/MeetTheTeam" className="link-name">
                    Meet The Team
                  </Link>
                </li>
                <li>
                  <Link to="/FAQs" className="link-name">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/SentiTubeLogic" className="link-name">
                    SentiTube Logic
                  </Link>
                </li>
                <li>
                  <Link to="/TermsOfService" className="link-name">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/*Colomns 4 */}
            <div className="col-md-3 col-sm-3">
              <h4>Contact</h4>
              <ul className="list_unstyled">
                <li>
                  <Link
                    to="mailto:sentitubephonex@gmail.com"
                    className="link-name"
                  >
                    sentitubephonex@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Container
        style={{
          marginTop: "20px",
        }}
      >
        <Row>
          <Col>
            <img
              src={footerlogo}
              alt="FooterLogo"
              className="footerlogo"
              style={{
                height: "120px",
                width: "auto",
                marginTop: "-20px",

                marginLeft: "-50px",
              }}
            />
          </Col>
          <Col>
            <Link to="/" className="link-name">
              Home
            </Link>
            <br />
            <Link to="/TryItOut" className="link-name">
              TrySentiTube
            </Link>
            <br />
            <Link to="/Contact" className="link-name">
              Contact
            </Link>
          </Col>
          <Col>
            <Link to="/About" className="link-name">
              About
            </Link>
            <br />
            <Link to="/MeetTheTeam" className="link-name">
              Meet the Team
            </Link>
            <br />
            <Link to="/FAQs" className="link-name">
              FAQ
            </Link>
          </Col>
          <Col>
            <h5>Contact</h5>
            <Link to="/sentitubephonex@gmail.com" className="link-name">
              sentitubephonex@gmail.com
            </Link>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default Footer;

const FooterContainer = styled.footer;
