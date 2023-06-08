import React from "react";
import { Container } from "react-bootstrap";
import {
  FaLongArrowAltDown,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaLongArrowAltUp,
} from "react-icons/fa";
import "./Education.scss";

const Education = () => {
  return (
    <section id="education">
      <Container className="aboutMe-grid">
        <div className="aboutMe-grid-box-1">
          <div className="d-flex flex-column align-items-center">
            <h2>Desarrolaldor Full Stack</h2>
            <FaLongArrowAltUp />
          </div>
        </div>
        <div className="aboutMe-grid-box aboutMe-grid-box-2">
          <div className="d-flex align-items-center justify-content-end h-100">
            <div className="text-end">
              <p>Backend</p>
              <p>15/07/2023 - 23/12/2023</p>
              <p>CoderHouse</p>
            </div>
            <FaLongArrowAltLeft />
          </div>
        </div>
        <div className="aboutMe-grid-box aboutMe-grid-box-3"></div>
        <div className="aboutMe-grid-box aboutMe-grid-box-4"></div>
        <div className="aboutMe-grid-box aboutMe-grid-box-5">
          <div className="d-flex align-items-center h-100">
            <FaLongArrowAltRight />
            <div className="text-start">
              <p>React JS</p>
              <p>20/03/2023 - 10/05/2023</p>
              <p>CoderHouse</p>
            </div>
          </div>
        </div>
        <div className="aboutMe-grid-box aboutMe-grid-box-6">
          <div className="d-flex align-items-center justify-content-end h-100">
            <div className="text-end">
              <p>JavaScript </p>
              <p>13/12/2022 - 14/02/2023</p>
              <p>CoderHouse</p>
            </div>
            <FaLongArrowAltLeft />
          </div>
        </div>
        <div className="aboutMe-grid-box aboutMe-grid-box-7"></div>
        <div className="aboutMe-grid-box aboutMe-grid-box-8"></div>
        <div className="aboutMe-grid-box aboutMe-grid-box-9">
          <div className="d-flex align-items-center h-100">
            <FaLongArrowAltRight />
            <div className="text-start">
              <p>Desarrollo Web</p>
              <p>13/09/2022 - 15/11/2022</p>
              <p>CoderHouse</p>
            </div>
          </div>
        </div>
        <div className="aboutMe-grid-box aboutMe-grid-box-10">
          <div className="d-flex align-items-center justify-content-end h-100">
            <div className="text-end">
              <p>Backend </p>
              <p>15/07/2023 - 23/12/2023</p>
              <p>CoderHouse</p>
            </div>
            <FaLongArrowAltLeft />
          </div>
        </div>
        <div className="aboutMe-grid-box aboutMe-grid-box-11"></div>
        <div className="aboutMe-grid-box-12">
          <div className="d-flex flex-column align-items-center h-100">
            <FaLongArrowAltDown />
            <h2>Ingeniero Mec&aacute;nico</h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Education;
