import "./AboutMe.scss";
import { motion } from "framer-motion";
import translateESContain from "../../../services/es/translateES.json";
import translateENContain from "../../../services/en/translateEN.json";

const AboutMe = ({isdarkMode , translate , pageStyle ,pageVariants ,pageTransition}) => {
    const titleEN = translateENContain.aboutMe;
    const titleES = translateESContain.aboutMe;
  return (
    <article className={`aboutMe-${isdarkMode()}`}>
      <h2 className={`aboutMe-${isdarkMode()}__h2`}>{translate?titleEN.title:titleES.title}</h2>
      <figure className={`aboutMe-${isdarkMode()}__images`}>
        {/*<img src={photo} className="aboutMe__images--photo" alt="photoMariana"/>*/}
      </figure>
      <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}>
      <p className={`aboutMe-${isdarkMode()}__description`}>
      {translate?titleEN.text1:titleES.text1}
      </p>
      <p className={`aboutMe-${isdarkMode()}__description`}>
      {translate?titleEN.text2:titleES.text2}
      </p>
      <p className={`aboutMe-${isdarkMode()}__description`}>
      {translate?titleEN.text3:titleES.text3}
      </p>
      <p className={`aboutMe-${isdarkMode()}__description`}>
      {translate?titleEN.text4:titleES.text4}
      </p></motion.div>
    </article>
  );
};

export default AboutMe;
