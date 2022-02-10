const SectionSkills = (props) => {
  return (
    <>
    <h4 className="article__text">
        <i className="fas fa-angle-left"></i> Front-End /
        <i className="fas fa-angle-right"></i>
      </h4>
    <section className={props.className}>
      <span className="skills-item">
        <i className={props.html} title="html5"></i>
      </span>
      <span className="skills-item">
        <i className={props.css} title="css3"></i>
      </span>
      <span className="skills-item">
        <i className={props.sass} title="sass"></i>
      </span>
      <span className="skills-item">
        <i className={props.npm} title="Npm"></i>
      </span>
      <span className="skills-item">
        <i className={props.js} title="javascript"></i>
      </span>
      <span className="skills-item">
        <i className={props.react}></i>
      </span>
      <span className="skills-item">
        <i className={props.git} title="Git"></i>
      </span>
      <span className="skills-item">
        <i className={props.github} title="Github"></i>
      </span>
      <span className="skills-item">
        <i className={props.slack} title="Slack"></i>
      </span>
      <span className="skills-item">
        <i className={props.terminal} title="Terminal"></i>
      </span>
      {/*Buscar Ubuntu */}
    </section>
    <h4 className="article__text">
        <i className="fas fa-angle-left"></i> Back-End /
        <i className="fas fa-angle-right"></i>
      </h4>
    <section className={props.className}>
    <span className="skills-item">
        <i className={props.node} title="Node Js"></i>
      </span>
      <span className="skills-item">
        <i className={props.database}></i>
      </span>
    </section>
    </>
  );
};

export default SectionSkills;
