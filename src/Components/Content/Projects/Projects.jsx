import React from "react";
import ProjectData from "../../../ProjectData";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="Projects">
            <h1 id="projects-section">PROJECTS</h1>
            {ProjectData.map(p => <ProjectCard data={p} key={p.id} />)}
        </div>
    );
}

export default Projects;