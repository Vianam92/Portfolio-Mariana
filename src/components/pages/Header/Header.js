import "./Header.scss";
import ChangeColor from "../../utils/otros/ChangeColor";

const Header = ({handleDarkMode , isdarkMode ,handleTranslate , translate}) => {
  const handleChangeLanguage = () =>{
    handleTranslate(translate);
  };
  return (
    <header className={"header-" + isdarkMode()}>
      <ChangeColor handleDarkMode={handleDarkMode} isdarkMode={isdarkMode}/>
      <div className={"header-" + isdarkMode()+"__transl"} onClick={handleChangeLanguage}>{translate?"ES":"EN"}</div>
    </header>
  );
};

export default Header;
