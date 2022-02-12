import "./Header.scss";
import ChangeColor from "../../utils/otros/ChangeColor";

const Header = ({handleDarkMode , isdarkMode ,handleTranslate , translate}) => {
  const handleChangeLanguage = () =>{
    handleTranslate(translate);
  };
  return (
    <header className={"header-" + isdarkMode()}>
      <ChangeColor handleDarkMode={handleDarkMode} isdarkMode={isdarkMode}/>
      <div onClick={handleChangeLanguage}>{translate?"EN":"ES"}</div>
    </header>
  );
};

export default Header;
