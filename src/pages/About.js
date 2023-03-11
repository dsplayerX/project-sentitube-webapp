import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/about.css";

function About() {
  return (
    <div>
      <h1 class="thick">What is SentiTube ?</h1>
      <p>text.........</p>
      
      <h1 class="thick"><center>Vision & Mission</center></h1>
      <div class ="row">
        <div class="column">
          <h3 class ="thick">Our Vision</h3>
          <p align ="left">To provide accurate sentiment results and personalized commentary 
            for YouTube videos by combining sentiment and sarcasm analysis.</p>
        </div>

        <div class ="column">
          <h3 class ="thick">Our Mission</h3>
          <p align ="left">To create, put into practice, and assess a solution that will make 
            it simple and quick for YouTube users to locate worthwhile content. 
            To recognize both sentiments and sarcasm, it will use sentiment and 
            sarcasm analysis,which will increase the detection system's accuracy 
            and performance rate.</p>
        </div>
      </div>

      <Link to="/MeetTheTeam">
        <button>Go to MeetTheTeam page</button>
      </Link>
    </div>
  );
}

export default About;
