import "./Work.scss";
import { motion } from "framer-motion";
import projectsES from "../../services/es/projectsES";
import projectsEN from "../../services/en/projectsEN";
//import { useState } from "react";
//import SearchProjects from "./SearchProjects";

const Work = ({
  isdarkMode,
  translate,
  pageStyle,
  pageVariants,
  pageTransition,
}) => {
  /*const [searchTeam, setSearchTeam] = useState("all");

  const handleClickTeam = (value) => {
    if(projectsES.key.includes("team")){
      setSearchTeam(value)
    }
  };*/

  const renderProjectsES = projectsES.map((project, index) => {
    return (
      <section key={index} className={`project-${isdarkMode()}__section`}>
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
          {project.text.map((item, index) => {
            return <i className={item} title="herramientas" key={index}></i>;
          })}
        </div>
        <p className={`project-${isdarkMode()}__section--description`}>
          {project.description}
        </p>
      </section>
    );
  });
  const renderProjectsEN = projectsEN.map((project, index) => {
    return (
      <section key={index} className={`project-${isdarkMode()}__section`}>
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
          {project.text.map((item, index) => {
            return <i className={item} title="herramientas" key={index}></i>;
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
        {/*<SearchProjects
          searchTeam={searchTeam}
          handleClickTeam={handleClickTeam}
        />*/}
        <article className={`project-${isdarkMode()}__article`}>
          {translate ? renderProjectsEN : renderProjectsES}
        </article>
      </motion.div>
    </section>
  );
};

export default Work;
