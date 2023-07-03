import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

//Animation AOS Scroll
import AOS from "aos";

//Estilos Propios
import "./Education.scss";

//Estilos Animacion AOS
import "aos/dist/aos.css";

AOS.init();

const Education = () => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <section id="education">
      <h2 className="text-center education-title">
        {isEnglish ? "Educational Journey" : "Trayecto Educativo"}
      </h2>
      <div className="wrapper">
        <div className="center-line"></div>
        <div data-aos="fade-right">
          <div className="row row-1">
            <section>
              <i className="icon fas fa-home"></i>
              <div className="details">
                <span className="title">
                  {isEnglish ? "Mechanical Engineer" : "Ingeniero Mecánico"}{" "}
                </span>
                <span>{isEnglish ? "March 2018" : "Marzo 2018"} </span>
              </div>
              <p>
                {" "}
                {isEnglish ? "Zulia University." : "Universidad del Zulia."}
              </p>
            </section>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="row row-2">
            <section>
              <i className="icon fas fa-star"></i>
              <div className="details">
                <span className="title">Argentina Programa: #SeProgramar</span>
                <span>{isEnglish ? "December 2021" : "Diciembre 2021"}</span>
              </div>
            </section>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="row row-1">
            <section>
              <i className="icon fas fa-home"></i>
              <div className="details">
                <span className="title">JAVA Full Stack</span>
                <span>{isEnglish ? "July 2022" : "Julio 2022"}</span>
              </div>
              <p>Codo a Codo 4.0</p>
            </section>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="row row-2">
            <section>
              <i className="icon fas fa-star"></i>
              <div className="details">
                <span className="title">Argentina Programa: #YoPragramo</span>
                <span>{isEnglish ? "August 2022" : "Agosto 2022"}</span>
              </div>
              <p>
                {isEnglish
                  ? "Waiting for certificate."
                  : "En espera del certificado."}
              </p>
            </section>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="row row-1">
            <section>
              <i className="icon fas fa-rocket"></i>
              <div className="details">
                <span className="title">
                  {isEnglish ? "Web Development" : "Desarrollo Web"}
                </span>
                <span>{isEnglish ? "November 2022" : "Noviembre 2022"}</span>
              </div>
              <p>Coderhouse</p>
            </section>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="row row-2">
            <section>
              <i className="icon fas fa-globe"></i>
              <div className="details">
                <span className="title">Javascript</span>
                <span>{isEnglish ? "March 2023" : "Marzo 2023"}</span>
              </div>
              <p>Coderhouse</p>
            </section>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="row row-1">
            <section>
              <i className="icon fas fa-paper-plane"></i>
              <div className="details">
                <span className="title">React JS</span>
                <span>{isEnglish ? "May 2023" : "Mayo 2023"}</span>
              </div>
              <p>Coderhouse</p>
            </section>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="row row-2">
            <section>
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <span className="title">
                  {" "}
                  {isEnglish ? "Backend programming" : "Programación Backend"}
                </span>
              </div>
              <p>
                {isEnglish
                  ? "Course start on July 2023"
                  : "Inicio de cursada Julio 2023."}
              </p>
              <p>Coderhouse</p>
              <p></p>
            </section>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="row row-1">
            <section>
              <i className="icon fas fa-paper-plane"></i>
              <div className="details">
                <span className="title">
                  {isEnglish
                    ? "Full Stack Developer"
                    : "Desarrollador Full Stack"}
                </span>
                <span>{isEnglish ? "In process" : "En proceso"}</span>
              </div>
              <p>
                {isEnglish
                  ? "Completion of the career comprised by the courses: Web Development, JavaScript, React Js, Backend Programming"
                  : "Finalicacion de la carrera comprendida por los cursos:Desarrollo Web, JavaScript, React JS y Programaci&oacute;n Backend."}
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
