import React from "react";
import TitleCard from "./TitleCard/TitleCard"
import FramingShapes from "./FramingShapes/FramingShapes";
import "./Splashscreen.css";

const Splashscreen = () => {
    return (
        <div id="splashscreen-section" className="Splashscreen">
            <FramingShapes />
            <TitleCard />
        </div>
    );
}

export default Splashscreen;