import React from "react";
import "./ProjectCard.css"

const ProjectCard = ({ data }) => {
    const { title, description, img, src, demo, blog } = data;
    return (
        <div className="ProjectCard">
            <div className="left-panel">
                <div className="project-info">
                    <h1>{ title }</h1>
                    <p>{ `${description} `} {blog ? <a className="hyperlink" target="_blank" href={ blog }>Read More</a> : ""}</p>
                </div>
                <div className="links">
                    <a target="_blank" href={src}>View Source</a>
                    <a target="_blank" href={demo}>View Live</a>
                </div>
            </div>
            <div className="right-panel">
                <img src={img} alt={title}/>
            </div>
        </div>
    );
}

export default ProjectCard;