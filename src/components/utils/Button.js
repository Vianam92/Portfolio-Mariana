import { Link } from "react-router-dom";
import "./Button.scss"

const Button = ({isdarkMode ,translate}) => {
  return (
    <div className={"div-button-"+isdarkMode()}>
      <Link to="/menu" className={`div-button-${isdarkMode()}__menu`}>{translate?"Menu":"Menú"}</Link>
    </div>
  );
};

export default Button;
