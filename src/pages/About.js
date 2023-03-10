import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/about.css";

function About() {
  return (
    <div>
      <h1><center>Vision & Mission</center></h1>
      <div class ="row">
        <div class="column">
          <h1>Our Vision</h1>
          <p>To provide accurate sentiment results and personalized commentary 
            for YouTube videos by combining sentiment and sarcasm analysis.</p>
        </div>

        <div class ="column">
          <h2>Our Mission</h2>
          <p>text ..............</p>
        </div>
      </div>

      <Link to="/MeetTheTeam">
        <button>Go to MeetTheTeam page</button>
      </Link>
    </div>
  );
}

export default About;
