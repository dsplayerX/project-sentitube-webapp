import React from "react";
import { Link } from 'react-router-dom';





function About() {
  return (
    <div>
      <h1><center>About Us</center></h1>
      <br/>

      <p><center>If you want to learn about more about us, 
                You are in the right place..... </center></p>

      <h2><center>Who we are</center></h2>
      <p><center>ajhgdHDKjdnkkjhiuguihjijHYTFDRE56ETYDB</center></p>

      <h4>Our Mission</h4>
      <h4>Our Vission</h4>
      <Link to="/MeetTheTeam">
        <button>Go to MeetTheTeam page</button>
      </Link>
    </div>
  );
}

export default About;
