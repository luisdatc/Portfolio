import React, { useEffect, useState } from "react";
import { projectFetch } from "../../utils/project";
import ProjectList from "../ProjectList/ProjectList";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Container } from "react-bootstrap";

import "./ProjectsContainer.scss";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    projectFetch()
      .then((resultado) => {
        setProjects(resultado);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="" id="projects">
      <h1 className="heading text-center">Proyectos Personales</h1>
      <>
        <ProjectList projects={projects}/>
      </>
    </Container>
  );
};

export default ProjectsContainer;
