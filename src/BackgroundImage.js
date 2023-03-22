import React from "react";
import { Image } from "react-bootstrap";
import background_shape1 from "./images/graph1.png";
import background_shape from "./images/graph.png"


function BackgroundImage() {
  return (
    <div>
        <div
            class="animate__animated animate__fadeInLeft"
            className="top_image"
            style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            }}
        >
            <Image src={background_shape1} alt="top_image" style={{width:"850px"}} />
        </div>
        <div
            class="animate__animated animate__fadeInRight"
            className="bottom_image"
            style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: -1,
            }}
        >
            <Image src={background_shape} alt="bottom_image" style={{width:"850px"}} />
        </div> 
      </div>
  );
}

export default BackgroundImage;