import React from "react";
import "./LinkComponent.css";

const LinkComponent = ({ data }) => {
    const { faClass } = data;
    return (
        <span className="LinkComponent">
            <a href=""><i className={faClass}></i></a>
        </span>
    );
}

export default LinkComponent;