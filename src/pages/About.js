import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/about.css";

function About() {
  return (
  <div>
    <div class ="about">
      <h1 class="thick"><center>What is SentiTube ?</center></h1>
      <p>We are PhoeniX group. This is the project that we have selected to 
        complete for the SDGP (Software Development Group Project),
        which is a subject that we are studying. SentiTube is the name of the project.
        Here, SentiTube performs a sentiment analysis of YouTube video comments 
        to provide insight into viewer comments and engagement. </p>
    </div>
      <br/>
      <div class ="row">
        <div class ="column">
          <div class="card shadow">
            <h3 class ="thick">Our Vision</h3>
            <p align ="left">To provide accurate sentiment results and personalized commentary 
            for YouTube videos by combining sentiment and sarcasm analysis.</p>
          </div>
        </div>

        <div class ="column">
          <div class="card shadow">
          <h3 class ="thick">Our Mission</h3>
          <p align ="left">To create, put into practice, and assess a solution that will make 
            it simple and quick for YouTube users to locate worthwhile content. 
            To recognize both sentiments and sarcasm, it will use sentiment and 
            sarcasm analysis,which will increase the detection system's accuracy 
            and performance rate.</p>
          </div>
        </div>
      </div>

    
    <br/>
    
      <Link to="/MeetTheTeam">
        <button class="button">Go to MeetTheTeam page</button>
      </Link>
  </div>
  );
}

export default About;
