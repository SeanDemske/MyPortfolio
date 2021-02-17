import React from "react";
import "./LinkComponent.css";

const LinkComponent = ({ data }) => {
    const { faClass, link } = data;
    return (
        <span className="LinkComponent">
            <a target="_blank" href={link}><i className={faClass}></i></a>
        </span>
    );
}

export default LinkComponent;