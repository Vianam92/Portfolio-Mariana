import { Link } from "react-router-dom";
import octocal from "../../images/hero/mi_octocal.png";
import "./Menu.scss";

const Menu = ({isdarkMode}) => {
  const navLinks = [
    { text: "Inicio" , link:"/" },
    { text: "Sobre Mí" , link:"/about-me"},
    { text: "Proyectos" , link:"/projects"},
    { text: "Herramientas" , link:"/skills"},
    { text: "Contacto" , link:"/contacts"},
  ];
  return (
    <nav className={`menu-${isdarkMode()}`}>
    <img className={`menu-${isdarkMode()}__img`} src={octocal} alt="octocal" />
    <ul className={`menu-${isdarkMode()}__nav`}>
      {navLinks.map((link) => {
        return (
          <li className={`menu-${isdarkMode()}__nav--list`} key={link.text}>
            <Link to={link.link} className={"link-"+ isdarkMode()}>
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
