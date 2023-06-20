import { Col, Container, Row } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/luisdatc/");
  };
  const gitHub = () => {
    window.open("https://github.com/luisdatc");
  };

  return (
    <Container id="contacto">
      <Row className="text-center align-items-center footer-text-column">
        <Col xs={12} s={12} md={12} lg={6} xl={6} className="">
          <Row className="align-items-center">
            <Col xs={12} s={12} md={12} lg={6} xl={6} className="">
              <h5>luisct91@gmail.com</h5>
            </Col>
            <Col xs={12} s={12} md={12} lg={6} xl={6} className="">
              <h5>Buenos Aires, Argentina</h5>
            </Col>
          </Row>
        </Col>
        <Col xs={12} s={12} md={12} lg={6} xl={6}>
          <a href="https://github.com/luisdatc" target="_blank">
            <img
              src="/iconos/github.png"
              alt="Github Page"
              /* onClick={gitHub} */ className="social-icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/luisdatc/" target="_blank">
            <img
              src="/iconos/linkedin.svg"
              alt="LinkedIn Profile"
              /* onClick={linkedIn} */ className="social-icon"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
