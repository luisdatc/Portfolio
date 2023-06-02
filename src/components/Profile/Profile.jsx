import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} s={12} md={6} xl={6} className="profile-column-text">
          <div>
            <h1>Hola, soy Luis Torres</h1>
          </div>
          <div>
            <p>Soy desarrollador Front End</p>
            <p>y te doy la bienvenida a mi portfolio 😎</p>
          </div>
          <div>
            <button>CV Español</button>
            <button>CV Ingles</button>
            <a href="/CV-Dev-Luis-Torres-Eng.pdf" download>
              CV Ingles
            </a>
          </div>
        </Col>
        <Col xs={12} s={12} md={6} xl={6} className="profile-column-image">
          <img
            src="/profile.jpg"
            alt="Image Profile"
            className="profile-image img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
