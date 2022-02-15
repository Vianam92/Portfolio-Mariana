import { Link } from "react-router-dom";
import "./Menu.scss";
import translateESContain from "../../services/es/translateES.json";
import translateENContain from "../../services/en/translateEN.json";

const Menu = ({isdarkMode ,translate}) => {
  const titleEN = translateENContain.Menu;
  const titleES = translateESContain.Menu;
  const navLinks = [
    { text: translate?titleEN.home:titleES.home , link:"/" },
    { text:translate?titleEN.aboutMe:titleES.aboutMe , link:"/about-me"},
    { text: translate?titleEN.projects:titleES.projects , link:"/projects"},
    { text: translate?titleEN.skills:titleES.skills , link:"/skills"},
    { text: translate?titleEN.contacts:titleES.contacts , link:"/contacts"},
  ];

  return (
    <nav className={`menu-${isdarkMode()}`}>
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
