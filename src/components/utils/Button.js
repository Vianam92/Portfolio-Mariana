import { Link } from "react-router-dom";
import "./Button.scss"

const Button = ({isdarkMode}) => {
  return (
    <div className={"div-button-"+isdarkMode()}>
      <Link to="/menu" className={`div-button-${isdarkMode()}__menu`}>Menú</Link>
    </div>
  );
};

export default Button;
