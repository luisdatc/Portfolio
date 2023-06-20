import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./Profile.scss";

const Profile = () => {
  return (
    <Container className="profile">
      <Row>
        <Col xs={12} s={12} md={6} xl={6} className="profile-column-text">
          <div className="">
            <p className="p-1">Hola, soy</p>
            <h1 className="p-1">Luis Torres</h1>
          </div>
          <div>
            <div className="animate__animated animate__zoomIn animate__repeat-2 animate__slower">
              <h2 className="pt-1">Desarrollador Front End</h2>
            </div>
            <p className="p-1">y te doy la bienvenida a mi <strong>portfolio</strong> 😎</p>
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
