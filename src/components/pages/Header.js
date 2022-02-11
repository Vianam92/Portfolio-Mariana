import "../../styles/Header.scss";
import ChangeColor from "../utils/otros/ChangeColor";

const Header = ({handleDarkMode , isdarkMode}) => {
  return (
    <header className={"header-" + isdarkMode()}>
      <ChangeColor handleDarkMode={handleDarkMode} isdarkMode={isdarkMode}/>
    </header>
  );
};

/*Header.propTypes = {
	menuOpen: PropTypes.bool.isRequired,
	menuOpenFirst: PropTypes.bool.isRequired,
	functionality: PropTypes.func.isRequired,
	activeLink: PropTypes.string.isRequired,
};*/

export default Header;
