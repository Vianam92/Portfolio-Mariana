import './Footer.scss';
import Links from '../../utils/Links';
import Form from "../../utils/Form";
import { motion } from "framer-motion";

const Footer = ({handleSubmit,input,isdarkMode,translate , pageStyle ,pageVariants ,pageTransition ,textarea ,handleTextarea}) => {

  return (
    <footer className={`footer-${isdarkMode()}`} id="contact">
      <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}>
      <Form handleSubmit={handleSubmit} input={input} textarea={textarea} handleTextarea={handleTextarea} isdarkMode={isdarkMode} translate={translate}/>
      <nav>
        <Links isdarkMode={isdarkMode} translate={translate}/>
      </nav>
      </motion.div>
      <p className={`footer-${isdarkMode()}__made`}>
        <code>{translate?"Programed by Mariana":"Programado por Mariana"}</code>
        <span className={`footer-${isdarkMode()}__made--heart`}>❤</span>
      </p>
    </footer>
  );
};

export default Footer;
