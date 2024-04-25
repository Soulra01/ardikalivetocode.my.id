import React from "react";
import "../../Styles/home.css";
import image from "./images/pas foto.jpeg";
import under from "./images/UnderCons.jpg";

const Home = () => {

    return (
        <div className="greet-container">
            {/* <div className="fancy-box">
                <img src={under} alt="" />
            </div> */}
            <div className="greet">
                <div className="greet-text">
                    <h1>Hi, I'm Alif Ardika</h1>
                    <p>
                        Student at Bina Nusantara University.
                        One of the Computer Science majors with a Cyber Security 
                        specialization, is hardworking, thrives under 
                        pressure, easily adapts, is honest, can make data-driven decisions
                        , analyzes problems, and takes responsibility.
                    </p>
                </div>
                <div className="greet-img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;