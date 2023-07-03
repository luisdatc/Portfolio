import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

//Estilos
import "./ProjectDetail.scss";

const ProjectDetail = ({ project }) => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <Container className="p-5">
      <Card className="card mx-auto project-detail-card">
        <Card.Img variant="top" src={project.image} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>
            {isEnglish
              ? project?.description?.ingles
              : project?.description?.spanish}
          </Card.Text>
          <Card.Text>{project.date}</Card.Text>
          <div className="text-center">
            <h3>
              {isEnglish
                ? "Technolgies used in the Project: "
                : "Tecnologias usadas para el desarrollo del proyecto:"}
            </h3>
            <div className="d-flex justify-content-around align-items-center flex-wrap p-1">
              {project.technologies &&
                project.technologies.map((icon, index) => {
                  return (
                    <img
                      key={index}
                      src={icon}
                      alt="technology icon"
                      className=""
                    />
                  );
                })}
            </div>
          </div>
          <div className="text-center">
            <Button variant="primary" className="m-1 project-detail-button">
              <a
                href={project.repository}
                target="_blank"
                className="project-detail-button-link"
              >
                {isEnglish ? "Repository" : "Repositorio"}
              </a>
            </Button>

            <Button variant="primary" className="m-1 project-detail-button">
              <a
                href={project.url}
                target="_blank"
                className="project-detail-button-link"
              >
                {isEnglish ? "Web Site" : "Sitio Web"}
              </a>
            </Button>
          </div>
          <Link to={"/"} className="">
            <Button
              variant="primary"
              className="mt-4 project-detail-button-home"
            >
              {isEnglish ? "Back" : "Volver"}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectDetail;
