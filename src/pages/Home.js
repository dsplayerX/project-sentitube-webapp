import React from "react";
import Button from 'react-bootstrap/Button'
import home_img from "../images/Fotor_AI.png"
import { Image } from 'react-bootstrap';
import "../CSS/home.css"
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div className="home">
        <div class="row">
          <div class="col-sm-12 col-md-6 welcome_note">
            <h1 id="animate-h1" class="text-start animate__animated animate__fadeInLeft"><b>Introducing SentiTube</b></h1>
            <p className="text-start w-100 animate__animated welcome_note_p animate__fadeInDown"id="animate-p">
              Welcome to SentiTube! Our platform analyzes the sentiment of YouTube video 
              comments to provide you with valuable insights into how viewers feel about 
              the content they are watching. With our state-of-the-art sentiment analysis 
              technology, you can quickly and easily understand the sentiment of commenters, 
              whether it's positive, negative, or neutral. By analyzing the sentiment of YouTube 
              video comments, we provide you with a powerful tool for understanding your 
              audience's feedback and engagement. Try our sentiment analysis tool today and 
              unlock the power of audience insights for your YouTube videos!
            </p>
            <div class="buttons d-flex justify-content-start animate__animated welcome_note_p animate__fadeInDown">
              <Button class="btn btn-outline-secondary rounded-4" href="./TryItOut" variant="outline-secondary" >Try SentiTube</Button>        
              <Button variant="link">Download Chrome extention</Button>
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
