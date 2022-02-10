import { Link } from "react-router-dom";
import "../../styles/Menu.scss";

const Menu = ({isdarkMode}) => {
  const navLinks = [
    { text: "Inicio" , link:"/landing" },
    { text: "Sobre Mí" , link:"/about-me"},
    { text: "Proyectos" , link:"/projects"},
    { text: "Herramientas" , link:"/skills"},
    { text: "Contacto" , link:"/contacts"},
  ];
  return (
    <nav className={`menu-${isdarkMode()}`}>
    <ul className={`menu-${isdarkMode()}__nav`}>
      {navLinks.map((link) => {
        return (
          <li className={`menu-${isdarkMode()}__nav--list`} key={link.text}>
            <Link to={link.link} className="link">
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
    </nav>
  );
};

export default Menu;
