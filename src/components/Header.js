import '../styles/Header.scss';
import { Route ,Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      {/*<img src="./assets/images/ico-menu.svg" alt="icon" className="header__img js-click">*/}
      <nav className="js-menu">
        <ul className="header__nav">
          <li className="header__nav--list">
            <Link to="/Inicio" className="link">
              Inicio
            </Link>
          </li>
          <li className="header__nav--list">
            <Link to="/About-me" className="link">
              Sobre Mí
            </Link>
          </li>
          <li className="header__nav--list">
            <Link to="/projects" className="link">
              Proyectos
            </Link>
          </li>
          {/*<li className="header__nav--list">
            <LInk href="#footer" className="link">
              Contacto
            </LInk>
          </li>*/}
        </ul>
      </nav>
      <Route exact path="/AboutMe">
        <p>Estás en About Me</p>
      </Route>
    </header>
  );
};

export default Header;
