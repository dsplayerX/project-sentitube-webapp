import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import home_img from "../images/Fotor_AI.png"

function Home() {
  return (
    <div className="home">
      <div className="welcome_note">
        <h1>Introducing SentiTube</h1>
        <p>
        Welcome to SentiTube! Our platform analyzes the sentiment of YouTube video comments to provide you with valuable 
        insights into how viewers feel about the content they are watching. With our state-of-the-art sentiment analysis 
        technology, you can quickly and easily understand the sentiment of commenters, whether it's positive, negative, or
        neutral. By analyzing the sentiment of YouTube video comments, we provide you with a powerful tool for understanding
          your audience's feedback and engagement. Try our sentiment analysis tool today and unlock the power of audience insights for your YouTube videos!
        </p>
      </div>  
      <div className="home_img_div">
        <img src={home_img} alt="home_img" className="img-fluid w-100"></img>
      </div>
    </div>
    );
}

export default Home;
