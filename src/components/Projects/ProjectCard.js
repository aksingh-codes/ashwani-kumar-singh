import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { BsGithub, BsLink } from "react-icons/bs";

const ProjectCard = ({ project }) => {
  const image = getImage(project.img);
  return (
    <div
      style={{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        alignItems: "center",
      }}
    >
      <GatsbyImage
        placeholder="tracedSVG"
        style={{ width: "100%" }}
        image={image}
        alt=""
      />
      <div
        className="body"
        style={{
          width: "100%",

          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <h3 style={{ marginBottom: 0 }}>{project.name}</h3>
        <p>{project.description}</p>
        <p
          style={{
            display: "flex",
            justifyContent: "start",
            gap: "8px",
          }}
        >
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <BsGithub style={{ fontSize: "1.1rem" }} />
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <BsLink style={{ fontSize: "1.1rem" }} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
