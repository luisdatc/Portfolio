import { Col, Container, Row } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <Container id="contacto">
      <Row className="text-center align-items-center">
        <Col xs={12} s={12} md={12} lg={6} xl={6} className="">
          <Row className="justify-content-center">
            <Col xs={12} s={12} md={12} lg={6} xl={6}>
              <div className="contact">
                <Row className="">
                  <Col xs={12} s={12} md={12} lg={4} xl={4}>
                    <span>Correo</span>
                  </Col>
                  <Col xs={12} s={12} md={12} lg={4} xl={4}>
                    <span>teelefono</span>
                  </Col>
                  <Col xs={12} s={12} md={12} lg={4} xl={4}>
                    <span>direccion</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} s={12} md={12} lg={6} xl={6}>
          <a href=""><img src="/iconos/github.png" alt="Github Page" /></a>
          <a href=""><img src="/iconos/linkedin.svg" alt="Github Page" /></a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
