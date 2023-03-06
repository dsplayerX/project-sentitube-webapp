import React from "react";
import { Link } from 'react-router-dom';
import "./About.css";
import about_bgimage from "./about_bgimage.jpg";




function About() {
  return (
    <div>

      <div class="bg-image"></div>
      <img src={about_bgimage}   />
        <div class="bg-text">
          <h1>About Us</h1>
          <p>If you want to learn about more about us, 
                You are in the right place.....</p>
        </div>

        <div class ="container">
          <div class="centered">
          <h2><center>Who we are</center></h2>
          <p><center></center></p>
          <h4>Our Mission</h4>
          <h4>Our Vission</h4>
          
          <Link to="/MeetTheTeam">
            <button>Go to MeetTheTeam page</button>
          </Link>
          </div>

        </div>
        
    </div>
  );
}

export default About;
