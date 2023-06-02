import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./MenuBar.scss";

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
    <header className="header">
      <div className="header--content">
        <a href="" className="header--content--logo">
          Luis Torres Portfolio
        </a>
        <nav
          className={`${"header--content--nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a href="">Browse Works</a>
            </li>
            <li>
              <a href="">Help</a>
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
