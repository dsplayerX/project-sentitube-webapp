import React from "react";
import { Link } from "react-router-dom";
import "../CSS/about.css";

function About() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div>
      <div class="about">
        <h1 class="thick">
          <center>What is SentiTube ?</center>
        </h1>
        <p>
          SentiTube is a powerful tool that provides sentiment analysis of
          YouTube video comments, offering users insightful information on
          viewer engagement. Developed by "phoeniX", a group of 2nd year
          undergraduate students following Software Engineering at University of
          Westminster, SentiTube utilizes advanced natural language processing
          algorithms to analyze comments for sentiment and sarcasm. With
          SentiPositive and SentiNegative results, along with customized
          feedback based on the positive-negative ratio and per-comment analysis
          results, SentiTube is an excellent resource for anyone looking to gain
          a deeper understanding of their YouTube audience. Whether using the
          website or chrome extension, SentiTube is completely free and
          available for everyone to use without any charges or fees. <br />
          <center>
            <Link to="/SentiTubeLogic" onClick={handleClick}>
              <button class="button">Read about logic of SentiTube</button>
            </Link>
          </center>
        </p>
      </div>
      <div class="about">
        <h1 class="thick">
          <center>Who are we ?</center>
        </h1>
        <p>
          We are "phoeniX", a team of 2nd year undergraduate students following
          Software Engineering at University of Westminster. We developed
          SentiTube as our SDGP (Software Development Group Project) with the
          goal of providing a tool that offers accurate sentiment and sarcasm
          analysis of YouTube comments, providing users with insightful feedback
          on viewer engagement. With SentiTube, we aimed to create a valuable
          resource for anyone looking to gain a deeper understanding of their
          YouTube audience, and we are proud to offer this tool completely free
          of charge. <br />
          <br />
          <center>
            <Link to="/MeetTheTeam" onClick={handleClick}>
              <button class="button">MeetTheTeam</button>
            </Link>
          </center>
        </p>
      </div>
      <br />

      <div class="cardrow">
        <div class="cardcolumn">
          <div class="cardab" align="justify">
            <div>
              <h3 class="thick" style={{ color: "red" }}>
                Our Vision
              </h3>
              <p>
                To provide accurate sentiment results and personalized
                commentary for YouTube videos by combining sentiment and sarcasm
                analysis.
              </p>
            </div>
          </div>
        </div>

        <div class="cardcolumn">
          <div class="cardab" align="justify">
            <div>
              <h3 class="thick" style={{ color: "red" }}>
                Our Mission
              </h3>
              <p>
                To create, put into practice, and assess a solution that will
                make it simple and quick for YouTube users to locate worthwhile
                content. To recognize both sentiments and sarcasm, it will use
                sentiment and sarcasm analysis,which will increase the detection
                system's accuracy and performance rate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}

export default About;
