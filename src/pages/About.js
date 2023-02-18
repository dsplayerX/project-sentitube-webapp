import React from "react";
import { Link } from 'react-router-dom';




function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/MeetTheTeam">
        <button>Go to MeetTheTeam page</button>
      </Link>
      
    </div>
  );
}

export default About;
