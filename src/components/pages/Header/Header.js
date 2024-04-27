import "./Header.scss";
import ChangeColor from "../../utils/otros/ChangeColor";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

const Header = ({ handleDarkMode, isdarkMode, handleTranslate, translate }) => {
  const handleChangeLanguage = () => {
    handleTranslate(translate);
  };

  const [active, setActive] = useState(false);

  const handlerActiveBurguer = () => {
    setActive(!active);
  };
  return (
    <header className={"header-" + isdarkMode()}>
      <ChangeColor handleDarkMode={handleDarkMode} isdarkMode={isdarkMode} />
      <div className="bars">
        <i className="uil uil-bars icon" onClick={handlerActiveBurguer}></i>
        <ul className={active ? "header-" + isdarkMode() + "_bars" : "header-" + isdarkMode() + "_isNotActive"}>
          {active ? (
            <>
              <li>
                <Link smooth to="#aboutMe">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link smooth to="#tools">
                  Tecnologías
                </Link>
              </li>
              <li>
                <Link smooth to="#projects">
                  Mis proyectos
                </Link>
              </li>
              <li>
                <Link smooth to="#contact">
                  Contacto
                </Link>
              </li>
              <li
                className={"header-" + isdarkMode() + "__transl"}
                onClick={handleChangeLanguage}
              >
                {translate ? "ES" : "EN"}
              </li>
            </>
          ) : (
            ""
          )}{" "}
        </ul>
      </div>

      <ul className={"header-" + isdarkMode() + "_nav"}>
        <li>
          <Link smooth to="#aboutMe">
            Sobre Mí
          </Link>
        </li>
        <li>
          <Link smooth to="#tools">
            Tecnologías
          </Link>
        </li>
        <li>
          <Link smooth to="#projects">
            Mis proyectos
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            Contacto
          </Link>
        </li>
        <li
          className={"header-" + isdarkMode() + "__transl"}
          onClick={handleChangeLanguage}
        >
          {translate ? "ES" : "EN"}
        </li>
      </ul>
    </header>
  );
};

export default Header;
