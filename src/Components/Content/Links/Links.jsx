import React from "react";
import LinksData from "../../../LinksData";
import LinkComponent from "./LinkComponent/LinkComponent";
import "./Links.css";


const Links = () => {
    return (
        <div className="Links">
            <h1>LINKS</h1>
            <div className="icons">{LinksData.map(link => <LinkComponent data={link} key={link.id} />)}</div>
        </div>
    );
}

export default Links;