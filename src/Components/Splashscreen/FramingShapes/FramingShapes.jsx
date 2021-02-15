import React, { useEffect, useState } from "react";
import "./FramingShapes.css";

const FramingShapes = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(loaded => true);
    }, [])

    return (
        <>
            <div className={`horizontal-line ${isLoaded ? "horizontal-loaded" : ""}`}></div>
            <div className={`vertical-line ${isLoaded ? "vertical-loaded" : ""}`}></div>
        </>
    );
}

export default FramingShapes;