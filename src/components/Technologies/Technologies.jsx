import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import "./Technologies.scss";
import { LanguageContext } from "../../context/LanguageContext";

const Technologies = () => {
  const { isEnglish } = useContext(LanguageContext);
  return (
    <section id="technologies" className="p-3">
      <Container className="p-4 technology-container">
        <Card className="technology-card">
          <h2 className="technology-card-title text-center p-2">
            {" "}
            {isEnglish
              ? "Technologies that I use the most: "
              : "Tecnologias que mayormente uso:"}
          </h2>
          <Row className="text-center p-3">
            <Col xs={12} sm={4} md={4} lg={4} xl={4} className="mt-2 mb-2">
              <Card className="w-100 h-100 technologies">
                <h4>{isEnglish ? "Main Language" : "Lenguaje Principal"} </h4>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img src="/iconos/html5.svg" alt="" className="img-fluid" />
                    <h6>html</h6>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img src="/iconos/css.svg" alt="" className="img-fluid" />
                    <h6>css3</h6>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <img src="/iconos/js.svg" alt="" className="img-fluid" />
                    <h6>js</h6>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4} xl={4} className="mt-2 mb-2">
              <Card className="w-100 h-100 technologies">
                <h4>Frameworks</h4>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <img
                      src="/iconos/bootstrap.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <h6>Bootstrap</h6>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <img src="/iconos/react.png" alt="" className="img-fluid" />
                    <h6>ReactJS</h6>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4} xl={4} className="mt-2 mb-2">
              <Card className="w-100 h-100 technologies">
                <h4>{isEnglish ? "Tools" : "Herramientas"}</h4>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <img src="/iconos/git.svg" alt="" className="img-fluid" />
                    <h6>Git</h6>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <img
                      src="/iconos/github.png"
                      alt=""
                      className="img-fluid"
                    />
                    <h6>Github</h6>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <img src="/iconos/npm.svg" alt="" className="img-fluid" />
                    <h6>Npm</h6>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img src="/iconos/sass.svg" alt="" className="img-fluid" />
                    <h6>Sass</h6>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <img
                      src="/iconos/firebase.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <h6>Firebase</h6>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
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
