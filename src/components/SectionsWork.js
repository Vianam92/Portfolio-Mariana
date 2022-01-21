const SectionsWork = (props) => {
  return (
    <section className="project__section">
      <h4 className="project__section--title">{props.name}</h4>
      <img
        src={props.image}
        alt={props.alt}
        className="project__section--image"
      />
      <div className="link-projects">
        <a
          href={props.LinkGitHub}
          className="link-projects__icon"
          title="repositorio"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github-alt icon"></i>
        </a>
        <a
          href={props.LinkPage}
          className="link-projects__demo"
          title="title"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-link"></i>
        </a>
      </div>
      <div className="project__section--tecnolog">
        <div>
          <img src="../images/html5.png" alt="html" className="img" />
          <img src="./assets/images/css.png" alt="css" className="img" />
          <img src="./assets/images/sass.jpeg" alt="sass" className="img" />
        </div>
      </div>
    </section>
  );
};

export default SectionsWork;
