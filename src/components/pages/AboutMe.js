import "../../styles/AboutMe.scss";
import "../../styles/Variables.scss";


const AboutMe = ({isdarkMode}) => {
  return (
    <>
    <article className={`aboutMe-${isdarkMode()}`}>
      <h2 className={`aboutMe-${isdarkMode()}__h2`}>Sobre mí </h2>
      <figure className={`aboutMe-${isdarkMode()}__images`}>
        {/*<img src={photo} className="aboutMe__images--photo" alt="photoMariana"/>*/}
      </figure>
      <p className={`aboutMe-${isdarkMode()}__description`}>
        Antes contable, ahora programadora Front-End Jr. Nacida en Cuba pero de
        descendientes gallegos, 4 generaciones después regreso a la tierra de
        mis bisabuelos.{" "}
      </p>
      <p className={`aboutMe-${isdarkMode()}__description`}>
        Como buena cubana que soy, me encanta la música y el baile, disfruto de
        la buena comida, los paseos por la naturaleza y el deporte.{" "}
      </p>
      <p className={`aboutMe-${isdarkMode()}__description`}>
        Y ya que estoy en un nuevo país, ¿qué mejor que reinventarme? Tras
        completar varios cursos y estudiar por mi cuenta decidí dar el paso y
        aplicar a Adalab. Lo que más me gusta de la programación es que no hay
        límites para seguir aprendiendo y creciendo.
      </p>
      <p className={`aboutMe-${isdarkMode()}__description`}>
        Además, la comunidad tech es un sector colaborativo y de trabajo en
        equipo y estoy orgullosa de pertenecer a él.
      </p>
    </article>
    </>
  );
};

export default AboutMe;