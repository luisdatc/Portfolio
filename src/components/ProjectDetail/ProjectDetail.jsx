import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectDetail = ({ project }) => {
  return (
    <Container>
      <Card className="p-1 mx-auto">
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
            <div className="d-flex justify-content-around align-items-center">
            {project.technologies &&
              project.technologies.map((icon, index) => {
                return <img key={index} src={icon} alt="technology icon" />;
              })}

            </div>
          </div>
          <div className="text-center">
            <Button
              variant="primary"
              href={project.repository}
              target="_blank"
            >
              Repositorio
            </Button>
       
            <Button variant="primary" href={project.url} target="_blank">
              Sitio Web
            </Button>
          </div>
          <Link to={"/"}>
            <Button variant="primary">Volver a home</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectDetail;
