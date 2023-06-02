import React from "react";
import { Badge, Button, Card, Container } from "react-bootstrap";

const ProjectDetail = () => {
  return (
    <Container>
      <Card className="p-1 mx-auto">
        <Card.Img variant="top" src="cedricDW.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <div>
            <h4>
              <Badge pill bg="secondary">
                New
              </Badge>
            </h4>
          </div>
          <Card.Text>descripcion</Card.Text>
          <Card.Text>Fecha de realizacion???</Card.Text>
          <div className="">tecnologias</div>
          <div className="text-center">
            <Button variant="primary">repositorio</Button>
            <Button variant="primary">DEPLOY</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectDetail;
