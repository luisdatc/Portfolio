import React, { useContext } from "react";
import { Container } from "react-bootstrap";

import "./AboutMe.scss";
import { LanguageContext } from "../../context/LanguageContext";

const AboutMe = () => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div id="about">
      <Container>
        <h2 className="text-center m-2 about-me">
          {isEnglish ? "About Me" : "Acerca de Mi"}
        </h2>
        <p className="p-3 about-me-text">
          {isEnglish
            ? "In addition to my education as a mechanical engineer, I have a strong passion for front-end development and creating websites and applications. My transition into the tech world has allowed me to combine my technical skills with my creativity to design and build engaging websites and applications from scratch. "
            : "Además de mi formación como ingeniero mecánico, tengo una sólida pasión por el desarrollo front-end y la creación de páginas web y aplicaciones. Mi transición hacia el mundo tecnológico me ha permitido combinar mis habilidades técnicas con mi creatividad para diseñar y construir sitios web y aplicaciones atractivas desde cero."}
        </p>
        <p className="p-3 about-me-text">
          {isEnglish
            ? "My methodical and organized approach, acquired during my engineering studies, has enabled me to approach each project in a structured and efficient manner. My ability to break down project development into clear stages and prioritize the most important tasks has been instrumental in achieving successful results. "
            : "Mi enfoque metódico y organizado, adquirido durante mis estudios de ingeniería, me ha permitido abordar cada proyecto de manera estructurada y eficiente. Mi capacidad para dividir el desarrollo del proyecto en etapas claras y priorizar las tareas más importantes ha sido fundamental para lograr resultados exitosos."}
        </p>
        <p className="p-3 about-me-text">
          {isEnglish
            ? "I consider myself a curious person who is constantly learning. In addition to my technical skills, I also value teamwork and collaboration. I am excited to be part of challenging projects that allow me to continue growing professionally in the field of front-end development. I am always willing to face new challenges and overcome obstacles to bring ideas to life and deliver exceptional digital experiences to users.  I am eager to be part of your team and help you materialize your ideas!"
            : "Me considero una persona curiosa y en constante aprendizaje. Además de mis habilidades técnicas, también valoro el trabajo en equipo y la colaboración. Estoy emocionado de formar parte de proyectos desafiantes que me permitan seguir creciendo profesionalmente en el ámbito del desarrollo front-end. Siempre estoy dispuesto a enfrentar nuevos desafíos y superar obstáculos para llevar las ideas a la realidad y ofrecer experiencias digitales excepcionales a los usuarios. ¡Estoy ansioso por ser parte de tu equipo y ayudarte a materializar tus ideas!"}
        </p>
      </Container>
    </div>
  );
};

export default AboutMe;
