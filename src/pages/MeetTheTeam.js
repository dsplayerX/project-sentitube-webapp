import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import imgDumidu from "../images/TeamMembersPhotos/dumindu.jpg";
import imgTharusha from "../images/TeamMembersPhotos/tharusha.jpg";
import imgPasindu from "../images/TeamMembersPhotos/pasindu.jpg";
import imgEshan from "../images/TeamMembersPhotos/eshan.jpg";
import imgSanuri from "../images/TeamMembersPhotos/sanuri.jpg";
import { FaLinkedin } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function MeetTheTeam() {
  return (
    <>
      <div className="meettheteammain">
        <h1
          className="page-name"
          style={{ color: "black", fontWeight: "bold" }}
        >
          <center>Meet The Team</center>
        </h1>
        <CardGroup className="fade-in">
          <Card>
            <Card.Img variant="top" src={imgDumidu} />
            <Card.Body>
              <Card.Title>Dumindu Sameendra</Card.Title>
              <Card.Text>Team Leader</Card.Text>
              <Button
                href="https://www.linkedin.com/in/dumindu-sameendra/"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="linkedin-button"
                style={{ marginTop: "10px" }}
              >
                <FaLinkedin size={24} />
              </Button>
              
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgTharusha} />
            <Card.Body>
              <Card.Title>Tharusha Dilshan</Card.Title>
              <Card.Text>Developer</Card.Text>
              <Button
                href="https://www.linkedin.com/in/dumindu-sameendra/"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="linkedin-button"
                style={{ marginTop: "10px" }}
              >
                <FaLinkedin size={24} />
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgPasindu} />
            <Card.Body>
              <Card.Title>Pasindu Theekshana</Card.Title>
              <Card.Text>Developer</Card.Text>
              <Button
                href="https://www.linkedin.com/in/dumindu-sameendra/"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="linkedin-button"
                style={{ marginTop: "10px" }}
              >
                <FaLinkedin size={24} />
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgEshan} />
            <Card.Body>
              <Card.Title>Eshan Hasitha</Card.Title>
              <Card.Text>Developer</Card.Text>
              <Button
                href="https://www.linkedin.com/in/dumindu-sameendra/"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="linkedin-button"
                style={{ marginTop: "10px" }}
              >
                <FaLinkedin size={24} />
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgSanuri} />
            <Card.Body>
              <Card.Title>Sanuri Perera</Card.Title>
              <Card.Text>Developer</Card.Text>
              <Button
                href="https://www.linkedin.com/in/dumindu-sameendra/"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="linkedin-button"
                style={{ marginTop: "10px" }}
              >
                <FaLinkedin size={24} />
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default MeetTheTeam;
