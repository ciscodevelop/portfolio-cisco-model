import React from "react";
import Card from "../../conponents/card/Card";
import "./projects.scss";
import { DataProjects } from "../../data/DataProjects";

const Projects = () => {
  return (
    <div className="container-projects "   >
      {DataProjects.map((project) => (
       
        <Card
          key={project.id}
          title={project.title}
          desc={project.desc}
          image={project.img}
          link={project.link}
          />
           
      ))}
    </div>
  );
};

export default Projects;
