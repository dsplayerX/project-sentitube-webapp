import React from "react";
import Button from 'react-bootstrap/Button'
import home_img from "../images/Fotor_AI.png"
import { Image } from 'react-bootstrap';
import "../CSS/home.css"

function Home() {
  return (
    <div className="home">
      <div className="welcome_note">
        <h1><b>Introducing SentiTube</b></h1>
        <p>
        Welcome to SentiTube! Our platform analyzes the sentiment of YouTube video comments to provide you with valuable 
        insights into how viewers feel about the content they are watching. With our state-of-the-art sentiment analysis 
        technology, you can quickly and easily understand the sentiment of commenters, whether it's positive, negative, or
        neutral. By analyzing the sentiment of YouTube video comments, we provide you with a powerful tool for understanding
          your audience's feedback and engagement. Try our sentiment analysis tool today and unlock the power of audience insights
           for your YouTube videos!
        </p>
      </div>  
      
      <div className="home_img_div">
        <Image src={home_img} alt="home_img" className="img-fluid w-100 rounded-5"/>
      </div>

      <div className="buttons">
        <Button className="rounded-5" href="./TryItOut" variant="outline-secondary">Try SentiTube</Button>{''}
      </div>
      
      <div className="buttons">
        <Button variant="link">Download Chrome extention</Button>
      </div>
    </div>
    );
}

export default Home;
