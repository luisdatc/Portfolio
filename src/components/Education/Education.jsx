import React from "react";
import { Container } from "react-bootstrap";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaLongArrowAltUp,
} from "react-icons/fa";
import "./Education.scss";

const Education = () => {
  {
    /*<section id="education">
      <h3 className="heading">Educacion</h3>
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
              <h3>Backend</h3>
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
            <FaLongArrowAltRight className="arriw-icon" />
            <div className="text-start">
              <h3>React JS</h3>
              <p>20/03/2023 - 10/05/2023</p>
              <p>CoderHouse</p>
            </div>
          </div>
        </div>
        <div className="aboutMe-grid-box aboutMe-grid-box-6">
          <div className="d-flex align-items-center justify-content-end h-100">
            <div className="text-end">
              <h3>JavaScript </h3>
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
              <h3>Desarrollo Web</h3>
              <p>13/09/2022 - 15/11/2022</p>
              <p>CoderHouse</p>
            </div>
          </div>
        </div>
        <div className="aboutMe-grid-box-12">
          <div className="d-flex flex-column align-items-center h-100">
            <FaLongArrowAltUp />
            <h2>Ingeniero Mec&aacute;nico</h2>
          </div>
        </div> 

      </Container>
    </section>*/
  }

  return (
    <div className="wrapper" id="education">
      <div className="center-line"></div>
      <div className="row row-1">
        <section>
          <i className="icon fas fa-home"></i>
          <div className="details">
            <span className="title">Ingeniero Mec&aacute;nico</span>
            <span>Marzo 2018</span>
          </div>
          <p>Universidad del Zulia.</p>
        </section>
      </div>
      <div className="row row-2">
        <section>
          <i className="icon fas fa-star"></i>
          <div className="details">
            <span className="title">Argentina Programa: #SeProgramar</span>
            <span>Diciembre 2021</span>
          </div>
        </section>
      </div>
      <div className="row row-1">
        <section>
          <i className="icon fas fa-home"></i>
          <div className="details">
            <span className="title">JAVA Full Stack</span>
            <span>Julio 2022</span>
          </div>
          <p>Codo a Codo 4.0</p>
        </section>
      </div>
      <div className="row row-2">
        <section>
          <i className="icon fas fa-star"></i>
          <div className="details">
            <span className="title">Argentina Programa: #YoPragramo</span>
            <span>Agosto 2022</span>
            <p>En espera del certificado.</p>
          </div>
        </section>
      </div>
      <div className="row row-1">
        <section>
          <i className="icon fas fa-rocket"></i>
          <div className="details">
            <span className="title">Desarrollo Web</span>
            <span>Noviembre 2022</span>
          </div>
          <p>Coderhouse</p>
        </section>
      </div>
      <div className="row row-2">
        <section>
          <i className="icon fas fa-globe"></i>
          <div className="details">
            <span className="title">Javascript</span>
            <span>Marzo 2023</span>
          </div>
          <p>Coderhouse</p>
        </section>
      </div>
      <div className="row row-1">
        <section>
          <i className="icon fas fa-paper-plane"></i>
          <div className="details">
            <span className="title">React JS</span>
            <span>Mayo 2023</span>
          </div>
          <p>Coderhouse</p>
        </section>
      </div>
      <div className="row row-2">
        <section>
          <i className="icon fas fa-map-marker-alt"></i>
          <div className="details">
            <span className="title">Programaci&oacute;n Backend</span>
          </div>

          <p>Inicio de cursada Julio 2023.</p>
          <p>Coderhouse</p>

          <p></p>
        </section>
      </div>
      <div className="row row-1">
        <section>
          <i className="icon fas fa-paper-plane"></i>
          <div className="details">
            <span className="title">Desarrollador Full Stack</span>
            <span>En proceso</span>
          </div>
          <p>
            Finalicacion de la carrera comprendida por los cursos: Desarrollo
            Web, JavaScript, React JS y Programaci&oacute;n Backend.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Education;

/* 
https://codepen.io/kranselius/pen/VRPzMM
https://codepen.io/cianty/pen/GJmPbj
https://codepen.io/r23ima/pen/gNGbjg
https://codepen.io/Santhanakrishnan/pen/xxwQVjd

*/
