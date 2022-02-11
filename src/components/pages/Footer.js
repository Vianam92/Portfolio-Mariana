import '../../styles/Footer.scss';
import '../../styles/Variables.scss';
import Links from '../utils/Links';
import Form from "../utils/Form";

const Footer = ({handleSubmit,input,isdarkMode}) => {

  return (
    <footer className={`footer-${isdarkMode()}`}>
      <Form handleSubmit={handleSubmit} input={input} isdarkMode={isdarkMode}/>
      <nav>
        <Links isdarkMode={isdarkMode}/>
      </nav>
      <p className={`footer-${isdarkMode()}__made`}>
        <code>Made by Mariana </code>
        <span className={`footer-${isdarkMode()}__made--heart`}>❤</span>
      </p>
    </footer>
  );
};

export default Footer;
