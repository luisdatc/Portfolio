import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectDetail = ({ project }) => {
  return (
    <Container className="p-5">
      <Card className="mx-auto">
        <Card.Img variant="top" src={project.image} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <div>
            <h4>
              <Badge pill bg="secondary">
                New
              </Badge>
            </h4>
          </div>
          <Card.Text>{project.description}</Card.Text>
          <Card.Text>{project.date}</Card.Text>
          <div className="text-center">
            <h3>Tecnologias usadas para el desarrollo del proyecto: </h3>
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
            <Button variant="primary" className="m-1">
              <a href={project.repository} target="_blank" className="">
                Repositorio
              </a>
            </Button>

            <Button variant="primary" className="m-1">
              <a href={project.url} target="_blank" className="">
                Sitio Web
              </a>
            </Button>
          </div>
          <Link to={"/"} className="">
            <Button variant="primary" className="mt-4">
              Volver a home
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectDetail;
