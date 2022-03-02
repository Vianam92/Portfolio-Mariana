import "./Work.scss";
import translateESContain from "../../services/es/translateES.json";
import translateENContain from "../../services/en/translateEN.json";
import { motion } from "framer-motion";

//images
import anonimus from "../../images/proyectos/Anonimus-proxy.png";
import spotify from "../../images/proyectos/Spotify.png";
import fantasticas from "../../images/proyectos/collage_4Fantasticas.jpg";
import animeSearch from "../../images/proyectos/search-anime.png";
import juegoPPT from "../../images/proyectos/juego-piedra-papel-tijeras.png";
import peso from "../../images/proyectos/juego-tu-peso.png";
import rick from "../../images/proyectos/rick.jpg";
import bingo from "../../images/proyectos/game_bingo.png";
import harry from "../../images/proyectos/howart.png";
import git from "../../images/proyectos/git.png";
import hagman from "../../images/proyectos/hagman.png";
import SectionsWork from "./SectionsWork";

const Work = ({
  isdarkMode,
  translate,
  pageStyle,
  pageVariants,
  pageTransition,
}) => {
  const titleEN = translateENContain.projects;
  const titleES = translateESContain.projects;

  return (
    <>
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
            <SectionsWork
              name={translate ? titleEN.num1.name : titleES.num1.name}
              image={rick}
              alt={titleES.num1.alt}
              LinkGitHub={titleES.num1.LinkGitHub}
              LinkPage={titleES.num1.LinkPage}
              html={titleES.num1.html}
              css={titleES.num1.css}
              sass={titleES.num1.sass}
              npm={titleES.num1.npm}
              js={titleES.num1.js}
              react={titleES.num1.react}
              node={titleES.num1.node}
              description={
                translate ? titleEN.num1.description : titleES.num1.description
              }
              isdarkMode={isdarkMode}
            />
            <SectionsWork
              name={translate ? titleEN.num2.name : titleES.num2.name}
              image={harry}
              alt={titleES.num2.alt}
              LinkGitHub={titleES.num2.LinkGitHub}
              LinkPage={titleES.num2.LinkPage}
              html={titleES.num2.html}
              css={titleES.num2.css}
              sass={titleES.num2.sass}
              npm={titleES.num2.npm}
              js={titleES.num2.js}
              react={titleES.num2.react}
              node={titleES.num2.node}
              description={
                translate ? titleEN.num2.description : titleES.num2.description
              }
              isdarkMode={isdarkMode}
            />
            <SectionsWork
              name={translate ? titleEN.num3.name : titleES.num3.name}
              image={animeSearch}
              alt={titleES.num3.alt}
              LinkGitHub={titleES.num3.LinkGitHub}
              LinkPage={titleES.num3.LinkPage}
              html={titleES.num3.html}
              css={titleES.num3.css}
              sass={titleES.num3.sass}
              npm={titleES.num3.npm}
              js={titleES.num3.js}
              react={titleES.num3.react}
              node={titleES.num3.node}
              description={
                translate ? titleEN.num3.description : titleES.num3.description
              }
              isdarkMode={isdarkMode}
            />
            <SectionsWork
              name={translate ? titleEN.num4.name : titleES.num4.name}
              image={hagman}
              alt={titleES.num4.alt}
              LinkGitHub={titleES.num4.LinkGitHub}
              LinkPage={titleES.num4.LinkPage}
              html={titleES.num4.html}
              css={titleES.num4.css}
              sass={titleES.num4.sass}
              npm={titleES.num4.npm}
              js={titleES.num4.js}
              react={titleES.num4.react}
              node={titleES.num4.node}
              description={
                translate ? titleEN.num4.description : titleES.num4.description
              }
              isdarkMode={isdarkMode}
            />
            <SectionsWork
              name={translate ? titleEN.num5.name : titleES.num5.name}
              image={bingo}
              alt={titleES.num5.alt}
              LinkGitHub={titleES.num5.LinkGitHub}
              LinkPage={titleES.num5.LinkPage}
              html={titleES.num5.html}
              css={titleES.num5.css}
              sass={titleES.num5.sass}
              npm={titleES.num5.npm}
              js={titleES.num5.js}
              react={titleES.num5.react}
              node={titleES.num5.node}
              description={
                translate ? titleEN.num5.description : titleES.num5.description
              }
              isdarkMode={isdarkMode}
            />
            <SectionsWork
              name={translate ? titleEN.num6.name : titleES.num6.name}
              image={juegoPPT}
              alt={titleES.num6.alt}
              LinkGitHub={titleES.num6.LinkGitHub}
              LinkPage={titleES.num6.LinkPage}
              html={titleES.num6.html}
              css={titleES.num6.css}
              sass={titleES.num6.sass}
              npm={titleES.num6.npm}
              js={titleES.num6.js}
              react={titleES.num6.react}
              node={titleES.num6.node}
              description={
                translate ? titleEN.num6.description : titleES.num6.description
              }
              isdarkMode={isdarkMode}
            />
            <SectionsWork
              name={translate ? titleEN.num7.name : titleES.num7.name}
              image={anonimus}
              alt={titleES.num7.alt}
              LinkGitHub={titleES.num7.LinkGitHub}
              LinkPage={titleES.num7.LinkPage}
              html={titleES.num7.html}
              css={titleES.num7.css}
              sass={titleES.num7.sass}
              description={
                translate ? titleEN.num7.description : titleES.num7.description
              }
              isdarkMode={isdarkMode}
            />
            <SectionsWork
              name={translate ? titleEN.num8.name : titleES.num8.name}
              image={spotify}
              alt={titleES.num8.alt}
              LinkGitHub={titleES.num8.LinkGitHub}
              LinkPage={titleES.num8.LinkPage}
              html={titleES.num8.html}
              css={titleES.num8.css}
              sass={titleES.num8.sass}
              description={
                translate ? titleEN.num8.description : titleES.num8.description
              }
              isdarkMode={isdarkMode}
            />
            <SectionsWork
              name={translate ? titleEN.num9.name : titleES.num9.name}
              image={fantasticas}
              alt={titleES.num9.alt}
              LinkGitHub={titleES.num9.LinkGitHub}
              LinkPage={titleES.num9.LinkPage}
              html={titleES.num9.html}
              css={titleES.num9.css}
              sass={titleES.num9.sass}
              description={
                translate ? titleEN.num9.description : titleES.num9.description
              }
              isdarkMode={isdarkMode}
            />
            <SectionsWork
              name={translate ? titleEN.num10.name : titleES.num10.name}
              image={peso}
              alt={titleES.num10.alt}
              LinkGitHub={titleES.num10.LinkGitHub}
              LinkPage={titleES.num10.LinkPage}
              html={titleES.num10.html}
              css={titleES.num10.css}
              js={titleES.num10.js}
              description={
                translate
                  ? titleEN.num10.description
                  : titleES.num10.description
              }
              isdarkMode={isdarkMode}
            />
            <SectionsWork
              name={translate ? titleEN.num11.name : titleES.num11.name}
              image={git}
              alt={titleES.num11.alt}
              LinkGitHub={titleES.num11.LinkGitHub}
              LinkPage={titleES.num11.LinkPage}
              html={titleES.num11.html}
              css={titleES.num11.css}
              js={titleES.num11.js}
              description={
                translate
                  ? titleEN.num11.description
                  : titleES.num11.description
              }
              isdarkMode={isdarkMode}
            />
          </article>
        </motion.div>
      </section>
    </>
  );
};

export default Work;
