import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";

//Estilos
import "./Profile.scss";

const Profile = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  const [showEnglish, setShowEnglish] = useState(isEnglish);

  const handleToggle = () => {
    toggleLanguage();
    setShowEnglish(!showEnglish);
  };

  return (
    <Container className="profile">
      <Row>
        <Col xs={12} s={12} md={6} xl={6} className="profile-column-text">
          <div className="">
            <p className="p-1">{isEnglish ? "Hi, I am" : "Hola, soy"}</p>
            <h1>Luis Torres</h1>
          </div>
          <div>
            <div className="animate__animated animate__zoomIn animate__repeat-2 animate__slower">
              <h2>
                {isEnglish ? "Front End Developer" : "Desarrollador Front End"}
              </h2>
            </div>
            <p className="p-1">
              {isEnglish
                ? "and I welcome you to my portfolio 😎"
                : "y te doy la bienvenida a mi portfolio 😎"}
            </p>
          </div>
          <div className="p-2">
            <button className="profile-cv-ing">
              <a href="/CV-Dev-Luis-Torres-Eng.pdf" download>
                CV Ingles
              </a>
            </button>
            <button className="profile-cv-esp">
              <a href="/CV-Dev-Luis-Torres-Esp.pdf" download>
                CV Español
              </a>
            </button>
          </div>
          <div className="d-flex justify-content-end pt-2 pb-2">
            <input
              className="check"
              type="checkbox"
              id="checkbox_toggle"
              onClick={handleToggle}
            />
            <div className="checkbox">
              <label htmlFor="checkbox_toggle" className="slide">
                <label htmlFor="checkbox_toggle" className="toggle"></label>
                <label htmlFor="checkbox_toggle" className="text">
                  Español
                </label>
                <label htmlFor="checkbox_toggle" className="text">
                  English
                </label>
              </label>
            </div>
          </div>
        </Col>
        <Col xs={12} s={12} md={6} xl={6} className="profile-column-image">
          <div className="profile-column-image-bg d-flex justify-content-center img-fluid">
            <img
              src="/profile-removebg-preview.png"
              alt="Image Profile"
              className="profile-image img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
