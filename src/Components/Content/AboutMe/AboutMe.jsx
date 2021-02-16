import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <h1>About Me</h1>
            <p>
                I'm a fullstack developer and I enjoy bringing
                my skillset and creativity to the table in a 
                project I believe I can contribute to. I grew 
                up around games and the modding community where
                I learned how awesome it is to build things. 
                Since then I have translated those skills over 
                to my career as a developer!
            </p>
            <p>P.S. I used to develop content for popular videogames!<a href="https://steamcommunity.com/id/SMasters9106/myworkshopfiles/">Check out my Steam Workshop</a></p>
        </div>
    );
}

export default AboutMe;