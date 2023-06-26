import { useContext, useState } from "react";
import "./Certifications.scss";
import { Col, Container, Row } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isEnglish } = useContext(LanguageContext);

  const handleClick = (image) => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  return (
    <Container id="certificados">
      <Row className="align-items-center">
        <Col xs={12} s={12} md={12} lg={9} xl={9} className="text-center">
          {selectedImage ? (
            <img src={selectedImage} alt="" className="img-fluid" />
          ) : (
            <h3 className="text-center p-5 certifications-text">
              {isEnglish
                ? "Select a certificate to watch it"
                : "Seleccione un certificado para verlo"}
            </h3>
          )}
        </Col>
        <Col
          xs={12}
          s={12}
          md={12}
          lg={3}
          xl={3}
          className="d-flex flex-column"
        >
          <Row className="justify-content-center">
            <Col xs={4} s={4} md={4} lg={10} xl={10} className="mt-1 mb-1">
              <img
                src="/DesarrolloWeb.png"
                alt=""
                className="img-fluid"
                onClick={() => handleClick("/DesarrolloWeb.png")}
              />
            </Col>
            <Col xs={4} s={4} md={4} lg={10} xl={10} className="mt-1 mb-1">
              <img
                src="/Javascript.png"
                alt=""
                className="img-fluid"
                onClick={() => handleClick("/Javascript.png")}
              />
            </Col>
            <Col xs={4} s={4} md={4} lg={10} xl={10} className="mt-1 mb-1">
              <img
                src="/ReactJS.png"
                alt=""
                className="img-fluid"
                onClick={() => handleClick("/ReactJS.png")}
              />
            </Col>
            <Col xs={4} s={4} md={4} lg={10} xl={10} className="mt-1 mb-1">
              <img
                src="/codoacodo.PNG"
                alt=""
                className="img-fluid"
                onClick={() => handleClick("/codoacodo.PNG")}
              />
            </Col>
            <Col xs={4} s={4} md={4} lg={10} xl={10} className="mt-1 mb-1">
              <img
                src="/seProgramar.PNG"
                alt=""
                className="img-fluid"
                onClick={() => handleClick("/seProgramar.PNG")}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Certifications;
