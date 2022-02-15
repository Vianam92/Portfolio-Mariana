import SectionSkills from "./SectionSkills";
import "./Skills.scss";
import { motion } from "framer-motion";

const Skills = ({
  isdarkMode,
  translate,
  pageStyle,
  pageVariants,
  pageTransition,
}) => {
  return (
    <article className={`article-${isdarkMode()}`}>
      <h2 className={`article-${isdarkMode()}__tecnologias`}>
        {translate ? "Technologies" : "Tecnologías"}
      </h2>
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <SectionSkills
          className="skills"
          html="uil uil-html5 icons"
          css="fab fa-css3-alt icons"
          sass="fab fa-sass icons"
          npm="fab fa-npm icons"
          js="fab fa-js-square icons"
          react="uil uil-react icons"
          git="fab fa-git icons"
          github="fab fa-github icons"
          slack="fab fa-slack icons"
          ubuntu="uil uil-linux icons"
          terminal="fas fa-terminal icons"
          node="fab fa-node icons"
          database="uil uil-database icons"
          isdarkMode={isdarkMode}
        />
      </motion.div>
    </article>
  );
};

export default Skills;
