import SectionSkills from "./SectionSkills";
import "./Skills.scss";

const Skills = ({isdarkMode}) => {
  return (
    <article className={`article-${isdarkMode()}`}>
      <h2 className={`article-${isdarkMode()}__tecnologias`}>Tecnologías</h2>
      <SectionSkills
        className="skills"
        html="uil uil-html5 icon"
        css="fab fa-css3-alt icon"
        sass="fab fa-sass icon"
        npm="fab fa-npm icon"
        js="fab fa-js-square icon"
        react="uil uil-react icon"
        git="fab fa-git icon"
        github="fab fa-github icon"
        slack="fab fa-slack icon"
        terminal="fas fa-terminal icon"
        node="fab fa-node icon"
        database="uil uil-database icon"
        isdarkMode={isdarkMode}
      />
    </article>
  );
};

export default Skills;
