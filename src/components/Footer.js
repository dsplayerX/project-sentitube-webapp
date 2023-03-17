import React from "react";
import styled from "styled-components";
import {Container,Row,Col,} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/footer-logo.jpg";

function Footer() {
  return(
    <div className="main_footer">
       <Container style={{
        marginTop:"20px"
       }}>
         <Row>
          <Col>
          <img src={logo} alt="Logo" height={"60px"} width={"260px"} className="logo" />
          </Col>
          <Col>
              <Link to="/" className="link-name">Home</Link><br />
              <Link to="/TryItOut" className="link-name">TrySentiOut</Link><br />
              <Link to="/Contact" className="link-name">Contact</Link>
          </Col>
          <Col>
            <Link to="/About" className="link-name">About Us</Link><br />
            <Link to="/MeetTheTeam" className="link-name">Meet the Team</Link><br/>
            <Link to="/FAQs" className="link-name">FAQ</Link>
          </Col>
          <Col>
            <h5>Contact</h5>
             <Link to="/sentitubephonex@gmail.com" className="link-name">sentitubephonex@gmail.com</Link>
          </Col>
         </Row>
       </Container>
    </div>
  )
}

export default Footer;

const FooterContainer = styled.footer 