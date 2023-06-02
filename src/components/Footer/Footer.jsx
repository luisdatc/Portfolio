import { Col, Container, Row } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} s={12} md={6} lg={6} xl={6}>
            <div className="contact">
                <p>Correo</p>
                <p>Telefono</p>
                <p>Direccion</p>
            </div>
        </Col>
        <Col xs={12} s={12} md={6} lg={6} xl={6}>
            <span>Github</span>
            <span>Linkedin</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
