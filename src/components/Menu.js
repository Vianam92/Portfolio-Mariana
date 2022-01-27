import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="js-menu">
      <ul className="header__nav">
        <li className="header__nav--list">
          <Link to="/" className="link">
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
  );
};

export default Menu;
