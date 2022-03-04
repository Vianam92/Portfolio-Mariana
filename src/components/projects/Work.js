import "./Work.scss";
import { motion } from "framer-motion";
import projectsES from "../../services/es/projectsES";

const Work = ({
  isdarkMode,
  translate,
  pageStyle,
  pageVariants,
  pageTransition,
}) => {
  const renderProjects = projectsES.map((project, index) => {
      return (
        <section key={index} className={`project-${isdarkMode()}__section`} >
          <div className="link-projects">
            <h4 className={`project-${isdarkMode()}__section--title`}>
              {project.name}
            </h4>
          </div>
          <img
            src={project.images}
            alt={project.alt}
            className={`project-${isdarkMode()}__section--image`}
          />
          <div className="link-projects">
            <a
              href={project.LinkPage}
              className="link-projects__demo"
              title="title"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-link"></i>
            </a>
            <a
              href={project.LinkGitHub}
              className="link-projects__icon"
              title="repositorio"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-alt icon"></i>
            </a>
          </div>
          <div className={`project-${isdarkMode()}__section--tecnolog`}>
            {project.text.map(item => {
              return <i className={item} title="herramientas"></i>
            })}
          </div>
          <p className={`project-${isdarkMode()}__section--description`}>
            {project.description}
          </p>
        </section>
      );
    });

  return (
      <section className={`project-${isdarkMode()}`}>
        <div className={`project-${isdarkMode()}__div`}>
          <h2 className={`project-${isdarkMode()}__div--title`}>
            {translate ? "My Projects" : "Mis Proyectos"}
          </h2>
        </div>
        <motion.div
          style={pageStyle}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <article className={`project-${isdarkMode()}__article`}>
            {renderProjects}
          </article>
        </motion.div>
      </section>
  );
};

export default Work;
