import React, { useState, useEffect } from "react";
import SeanDemskeImg from "../../../img/SeanBW.png";
import "./TitleCard.css";

const TitleCard = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(loaded => true);
    }, [])

    return (
        <div className={`TitleCard ${isLoaded ? "TitleCard-loaded" : ""}`}>
            <div className="left-panel">
                <div className="name-title">
                    <p className="my-name">Sean Demske</p>
                    <p className="my-title">Software Engineer</p>
                </div>
                <div className="nav-links">
                    <a href="#projects-section">View Projects</a>
                    <a target="_blank" href="https://blog.seandemske.com/">View Blog</a>
                </div>
            </div>
            <div className="right-panel">
                <img src={SeanDemskeImg} alt="Drawing of Sean Demske"/>
            </div>
        </div>
    );
}

export default TitleCard;