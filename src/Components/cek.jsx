import React from "react";
import "../Styles/home.css";

const Greet = () => {
    return (
        <div className="greet-container">
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
                    {/* <img src="/assets/home/img/pas foto.jpeg" alt="pas foto" /> */}
                </div>
            </div>
        </div>
    );
}

export default Greet;
