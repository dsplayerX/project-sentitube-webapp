import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import imgDumidu from "../images/TeamMembersPhotos/dumindu.jpg"
import imgTharusha from "../images/TeamMembersPhotos/tharusha.jpg"
import imgPasindu from "../images/TeamMembersPhotos/pasindu.jpg"
import imgEshan from "../images/TeamMembersPhotos/eshan.jpg"
import imgSanuri from "../images/TeamMembersPhotos/dumindu.jpg"

function MeetTheTeam() {
  return (
    <>
      <div className="meettheteammain">
        <h1>
          <center>Meet The Team</center>
        </h1>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={imgDumidu}
            />
            <Card.Body>
              <Card.Title>Dumindu Sameendra</Card.Title>
              <Card.Text>Team Leader</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <Card.Body>
              <Card.Title>Tharusha Dilshan</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <Card.Body>
              <Card.Title>Pasindu Theekshana</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <Card.Body>
              <Card.Title>Eshan Hasitha</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <Card.Body>
              <Card.Title>Sanuri Perera</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default MeetTheTeam;
