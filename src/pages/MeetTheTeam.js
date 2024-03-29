import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import imgDumidu from "../images/TeamMembersPhotos/dumindu.jpg";
import imgTharusha from "../images/TeamMembersPhotos/tharusha.jpg";
import imgPasindu from "../images/TeamMembersPhotos/pasindu.jpg";
import imgEshan from "../images/TeamMembersPhotos/eshannew.jpg";
import imgSanuri from "../images/TeamMembersPhotos/sanuri.jpg";
import { FaLinkedin } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";

function MeetTheTeam() {
  return (
    <>
      <div className="meettheteammain">
        <h1
          className="page-name"
          style={{fontWeight: "bold" }}
        >
          <center>Meet The Team</center>
        </h1>
        <CardGroup className="fade-in" style={{paddingBottom:"40px"}}>
          <Card style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              backgroundColor: "rgba(255, 255, 255,0.888 )",
              borderRadius: "20px"}}>
            <Card.Img variant="top" src={imgDumidu} style={{borderTopLeftRadius: "20px",borderTopRightRadius:"20px"}}/>
            <Card.Body>
              <Card.Title>Dumindu Sameendra</Card.Title>
              <Card.Text>Team Leader</Card.Text>
              <Button
                href="https://www.linkedin.com/in/dumindu-s-886189223/"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="linkedin-button"
                style={{ marginTop: "10px" }}
              >
                <FaLinkedin size={24} />
              </Button>
              <Button
                href="https://github.com/dsplayerX"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                style={{ marginTop: "10px" }}
                className="github-button"
              >
                <FaGithub size={24} />
              </Button>
              <div class="card-body">
                
                <p>
                  To contact me, please send an email to{" "}
                  <a href="mailto:dumindu.20210592@iit.ac.lk">dumindu.20210592@iit.ac.lk</a>.
                </p>
              </div>
            </Card.Body>
          </Card>
          <Card style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "20px"}}>
            <Card.Img variant="top" src={imgTharusha} style={{borderTopLeftRadius: "20px",borderTopRightRadius:"20px"}}/>
            <Card.Body>
              <Card.Title>Tharusha Dilshan</Card.Title>
              <Card.Text>Developer</Card.Text>
              <Button
                href="https://www.linkedin.com/in/tharusha-dilshan0418/"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="linkedin-button"
                style={{ marginTop: "10px" }}
              >
                <FaLinkedin size={24} />
              </Button>
              <Button
                href="https://github.com/TharU0418"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                style={{ marginTop: "10px" }}
                className="github-button"
              >
                <FaGithub size={24} />
              </Button>
              <div class="card-body">
                
                <p>
                  To contact me, please send an email to{" "}
                  <a href="mailto:tharusha.20210593@iit.ac.lk">tharusha.20210593@iit.ac.lk</a>.
                </p>
              </div>
            </Card.Body>
          </Card>
          <Card style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "20px"}}>
            <Card.Img variant="top" src={imgPasindu} style={{borderTopLeftRadius: "20px",borderTopRightRadius:"20px"}} />
            <Card.Body>
              <Card.Title>Pasindu Theekshana</Card.Title>
              <Card.Text>Developer</Card.Text>
              <Button
                href="https://www.linkedin.com/in/pasindu-de-silva-411369223"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="linkedin-button"
                style={{ marginTop: "10px" }}
              >
                <FaLinkedin size={24} />
              </Button>
              <Button
                href="https://github.com/MrDarkDrago"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                style={{ marginTop: "10px" }}
                className="github-button"
              >
                <FaGithub size={24} />
              </Button>
              <div class="card-body">
                
                <p>
                  To contact me, please send an email to{" "}
                  <a href="mailto:pasindu.20210169@iit.ac.lk">pasindu.20210169@iit.ac.lk</a>.
                </p>
              </div>
            </Card.Body>
          </Card>
          <Card style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "20px"}}>
            <Card.Img variant="top" src={imgEshan} style={{borderTopLeftRadius: "20px",borderTopRightRadius:"20px"}} />
            <Card.Body>
              <Card.Title>Eshan Hasitha</Card.Title>
              <Card.Text>Developer</Card.Text>
              <Button
                href="https://www.linkedin.com/in/eshan-hasitha/"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="linkedin-button"
                style={{ marginTop: "10px" }}
              >
                <FaLinkedin size={24} />
              </Button>
              <Button
                href="https://github.com/Hasithjay98"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                style={{ marginTop: "10px" }}
                className="github-button"
              >
                <FaGithub size={24} />
              </Button>
              <div class="card-body">
                
                <p>
                  To contact me, please send an email to{" "}
                  <a href="mailto:eshan.20210150@iit.ac.lk">eshan.20210150@iit.ac.lk</a>.
                </p>
              </div>
            </Card.Body>
          </Card>
          <Card style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "20px"}}>
            <Card.Img variant="top" src={imgSanuri} style={{borderTopLeftRadius: "20px",borderTopRightRadius:"20px"}} />
            <Card.Body>
              <Card.Title>Sanuri Perera</Card.Title>
              <Card.Text>Developer</Card.Text>
              <Button
                href="https://www.linkedin.com/in/sanuri-perera/"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="linkedin-button"
                style={{ marginTop: "10px" }}
              >
                <FaLinkedin size={24} />
              </Button>
              <Button
                href="https://github.com/Sanuri20"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                style={{ marginTop: "10px" }}
                className="github-button"
              >
                <FaGithub size={24} />
              </Button>
              <div class="card-body">
                
                <p>
                  To contact me, please send an email to{" "}
                  <a href="mailto:sanuri.20211272@iit.ac.lk">sanuri.20211272@iit.ac.lk</a>.
                </p>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default MeetTheTeam;
