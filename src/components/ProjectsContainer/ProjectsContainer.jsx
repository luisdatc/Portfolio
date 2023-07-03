import { useContext, useEffect, useState } from "react";
import { projectFetch } from "../../utils/project";
import { Container } from "react-bootstrap";
import ProjectList from "../ProjectList/ProjectList";
import { LanguageContext } from "../../context/LanguageContext";

//Estilos
import "./ProjectsContainer.scss";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const { isEnglish } = useContext(LanguageContext);

  useEffect(() => {
    projectFetch()
      .then((resultado) => {
        setProjects(resultado);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container id="projects">
      <h1 className="heading text-center">
        {isEnglish ? "Personal Projects" : "Proyectos Personales"}
      </h1>
      <>
        <ProjectList projects={projects} />
      </>
    </Container>
  );
};

export default ProjectsContainer;
