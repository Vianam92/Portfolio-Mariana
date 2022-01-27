const SectionSkills = (props) => {
  return (
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
        <i class={props.node} title="Node Js"></i>
      </span>
      <span className="skills-item">
        <i class={props.database}></i>
      </span>
      <span className="skills-item">
        <i class={props.git} title="Git"></i>
      </span>
      <span className="skills-item">
        <i class={props.github} title="Github"></i>
      </span>
      <span className="skills-item">
        <i class={props.slack} title="Slack"></i>
      </span>
      <span className="skills-item">
        <i class={props.terminal} title="Terminal"></i>
      </span>
      {/*Buscar Ubuntu */}
    </section>
  );
};

export default SectionSkills;
