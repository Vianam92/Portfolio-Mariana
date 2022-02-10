import { Link } from "react-router-dom";
import "../../styles/Button.scss"

const Button = () => {
  return (
    <div className="div-button">
      <Link to="/menu" className="div-button__menu">Menú</Link>
    </div>
  );
};

export default Button;
