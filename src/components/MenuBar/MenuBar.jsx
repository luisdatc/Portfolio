import { useContext, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./MenuBar.scss";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

const MenuBar = () => {
  const { isEnglish } = useContext(LanguageContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header sticky-top">
      <div className="header--content">
        <Link to="/" className="header--content--logo">
          <span>Luis Torres</span>
        </Link>

        <nav
          className={`${"header--content--nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li>
              <Link to={"/"}>{isEnglish ? "Home" : "Inicio"} </Link>
            </li>
            <li>
              <a href="#about">{isEnglish ? "About Me" : "Acerca de Mi"} </a>
            </li>
            <li>
              <a href="#education">{isEnglish ? "Education" : "Educación"} </a>
            </li>
            <li>
              <a href="#technologies">
                {isEnglish ? "Technologies" : "Tecnologias"}{" "}
              </a>
            </li>
            <li>
              <a href="#projects">{isEnglish ? "Projects" : "Proyectos"}</a>
            </li>
            <li>
              <a href="#certificados">
                {isEnglish ? "Certificates" : "Certificados"}
              </a>
            </li>
            <li>
              <a href="#contacto">{isEnglish ? "Contact" : "Contacto"}</a>
            </li>
          </ul>
        </nav>
        <div className="header--content--toggle">
          {!menuOpen ? (
            <FaBars onClick={menuToggleHandler} />
          ) : (
            <FaTimes onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default MenuBar;
