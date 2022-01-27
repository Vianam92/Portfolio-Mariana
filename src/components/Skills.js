import SectionSkills from "./SectionSkills";
import "../styles/Skills.scss";

const Skills = () => {
  return (
    <article className="article" id="herramientas">
      <h2 className="article__herramientas">Lo que he aprendido hasta ahora</h2>
      <SectionSkills
      className="skills"
        html="uil uil-html5 icon"
        css="fab fa-css3-alt icon"
        sass="fab fa-sass icon"
        npm="fab fa-npm icon"
        js="fab fa-js-square icon"
        react="uil uil-react icon"
        node="fab fa-node icon"
        database="uil uil-database icon"
        git="fab fa-git icon"
        github="fab fa-github icon"
        slack="fab fa-slack icon"
        terminal="fas fa-terminal icon"
      />
    </article>
  );
};

export default Skills;
