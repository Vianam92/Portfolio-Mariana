import "./Header.scss";
import ChangeColor from "../../utils/otros/ChangeColor";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import translateJsonES from "../../../services/es/translateES.json";
import translateJsonEN from "../../../services/en/translateEN.json";

const Header = ({ handleDarkMode, isdarkMode, handleTranslate, translate }) => {
  const handleChangeLanguage = () => {
    handleTranslate(translate);
  };

  const translEn = translateJsonEN.menu;
  const transEs = translateJsonES.menu;

  const [active, setActive] = useState(false);

  const handlerActiveBurguer = () => {
    setActive(!active);
  };

  const listRender = () => {
    return (
      <>
        <li>
          <Link smooth to="#aboutMe">
            {!translate ? transEs.aboutMe : translEn.aboutMe}
          </Link>
        </li>
        <li>
          <Link smooth to="#tools">
            {!translate ? transEs.tecnologies : translEn.tecnologies}
          </Link>
        </li>
        <li>
          <Link smooth to="#projects">
            {!translate ? transEs.projects : translEn.projects}
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            {!translate ? transEs.contacts : translEn.contacts}
          </Link>
        </li>
        <li
          className={"header-" + isdarkMode() + "__transl"}
          onClick={handleChangeLanguage}
        >
          {translate ? "ES" : "EN"}
        </li>
      </>
    );
  };

  return (
    <header className={"header-" + isdarkMode()}>
      <ChangeColor handleDarkMode={handleDarkMode} isdarkMode={isdarkMode} />
      <div className="bars">
        <i className="uil uil-bars icon" onClick={handlerActiveBurguer}></i>
        <ul
          className={
            active
              ? "header-" + isdarkMode() + "_bars"
              : "header-" + isdarkMode() + "_isNotActive"
          }
        >
          {active ? (
            <>
              {listRender()}
            </>
          ) : (
            ""
          )}{" "}
        </ul>
      </div>

      <ul className={"header-" + isdarkMode() + "_nav"}>
        {listRender()}
      </ul>
    </header>
  );
};

export default Header;
