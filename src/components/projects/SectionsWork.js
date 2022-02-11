
const SectionsWork = (props) => {
  return (
    <section className={`project-${props.isdarkMode()}__section`} >
      <div className="link-projects"> 
      <h4 className={`project-${props.isdarkMode()}__section--title`}>{props.name}</h4>
     </div>
      <img
        src={props.image}
        alt={props.alt}
        className={`project-${props.isdarkMode()}__section--image`}
      />
      <div className="link-projects">
        <a
          href={props.LinkPage}
          className="link-projects__demo"
          title="title"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-link"></i>
        </a>
        <a
          href={props.LinkGitHub}
          className="link-projects__icon"
          title="repositorio"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github-alt icon"></i>
        </a>
      </div>
      <div className={`project-${props.isdarkMode()}__section--tecnolog`}>
      <i className={props.html} title="html5"></i>
      <i className={props.css} title="css3"></i>
      <i className={props.sass} title="sass"></i>
      <i className={props.npm} title="Npm"></i>
      <i className={props.js} title="javascript"></i>
      <i className={props.react}></i>
      <i className={props.node} title="Node Js"></i>
      <i className={props.database}></i>
      <i className={props.git} title="Git"></i>
      <i className={props.github} title="Github"></i>
      <i className={props.slack} title="Slack"></i>
      <i className={props.terminal} title="Terminal"></i>
      </div>
      <p className={`project-${props.isdarkMode()}__section--description`}>{props.description}</p>
    </section>
  );
};

export default SectionsWork;
