// src/components/Project.js
import React from "react";
// import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import "./Project.css";

const Project = ({ title, description, link, githublink, imageUrl }) => (
  <div className="project-card hidden">
    <a href={link} target="_blank">
      <img src={imageUrl} alt={title} style={{ maxWidth: "100%" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      {/* {link} */}
      {githublink && (
        <a
          className="github"
          href={githublink}
          target="_blank"
          rel="noopener noreferrer"
        >
          __Git
          <FaGithub size={25} color="black" />
          hub__
        </a>
      )}
    </a>
  </div>
);

export default Project;
