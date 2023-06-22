import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./MenuBar.scss";
import { Link } from "react-router-dom";

const MenuBar = () => {
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
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <a href="#about">Acerca de Mi</a>
            </li>
            <li>
              <a href="#education">Educacion</a>
            </li>
            <li>
              <a href="#technologies">Tecnologias</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#certificados">Certificados</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
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
