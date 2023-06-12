import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Technologies = () => {
  return (
    <Container className="p-3">
      <h2 className="text-center p-2">Tecnologias que mayormente uso:</h2>
      <Row className="text-center p-4">
        <Col xs={12} s={12} md={12} lg={4} xl={4}>
          <h3>Lenguaje Principal</h3>
          <Row>
            <Col xs={12} s={12} md={12} lg={6} xl={6}>
              <img src="/iconos/html5.svg" alt="" />
              <h6>html</h6>
            </Col>
            <Col xs={12} s={12} md={12} lg={6} xl={6}>
              <img src="/iconos/css.svg" alt="" />
              <h6>css3</h6>
            </Col>
            <Col xs={12} s={12} md={12} lg={12} xl={12}>
              <img src="/iconos/js.svg" alt="" />
              <h6>js</h6>
            </Col>
          </Row>
        </Col>
        <Col xs={12} s={12} md={12} lg={4} xl={4}>
          <h3>Librerias/Frameworks</h3>
          <Row>
            <Col xs={12} s={12} md={12} lg={12} xl={12}>
              <img src="/iconos/bootstrap.svg" alt="" />
              <h6>Bootstrap</h6>
            </Col>
            <Col xs={12} s={12} md={12} lg={12} xl={12}>
              <img src="/iconos/react.png" alt="" />
              <h6>ReactJS</h6>
            </Col>
          </Row>
        </Col>
        <Col xs={12} s={12} md={12} lg={4} xl={4}>
          <h3>Herramientas</h3>
          <Row>
            <Col xs={12} s={12} md={12} lg={4} xl={4}>
              <img src="/iconos/git.svg" alt="" />
              <h6>Bootstrap</h6>
            </Col>
            <Col xs={12} s={12} md={12} lg={4} xl={4}>
              <img src="/iconos/github.png" alt="" />
              <h6>ReactJS</h6>
            </Col>
            <Col xs={12} s={12} md={12} lg={4} xl={4}>
              <img src="/iconos/npm.svg" alt="" />
              <h6>ReactJS</h6>
            </Col>
            <Col xs={12} s={12} md={12} lg={6} xl={6}>
              <img src="/iconos/sass.svg" alt="" />
              <h6>ReactJS</h6>
            </Col>
            <Col xs={12} s={12} md={12} lg={6} xl={6}>
              <img src="/iconos/firebase.svg" alt="" />
              <h6>ReactJS</h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Technologies;
/* 
cards
https://uiverse.io/boryanakrasteva/strong-cat-50
https://uiverse.io/eslam-hany/nasty-zebra-54

buttons
https://uiverse.io/mrhyddenn/stale-cheetah-42
https://uiverse.io/mrhyddenn/moody-badger-62
https://uiverse.io/zjssun/tidy-sloth-40
https://uiverse.io/Navarog21/loud-bird-67
https://uiverse.io/JkHuger/fat-bat-0 */
