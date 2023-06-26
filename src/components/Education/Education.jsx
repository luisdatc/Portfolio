import React, { useContext } from "react";

import "./Education.scss";
import { LanguageContext } from "../../context/LanguageContext";

const Education = () => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <section id="education">
      <h2 className="text-center education-title">
        {isEnglish ? "Educational Journey" : "Trayecto Educativo"}
      </h2>
      <div className="wrapper">
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
            </div>
            <p>En espera del certificado.</p>
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
    </section>
  );
};

export default Education;

/* 
https://codepen.io/kranselius/pen/VRPzMM
https://codepen.io/cianty/pen/GJmPbj
https://codepen.io/r23ima/pen/gNGbjg
https://codepen.io/Santhanakrishnan/pen/xxwQVjd

*/
