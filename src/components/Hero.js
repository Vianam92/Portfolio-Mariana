import octocal from "../images/mi_octocal.png";
import "../styles/Hero.scss";
import "../styles/Variables.scss";
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div> <Particles options={particlesOptions} position="relative" height="100vh" width="100vw"/></div>
        <img className="hero__img" src={octocal} alt="octocal" />
        <div className="hero__Iam">
          <h1 className="hero__Iam--title">Hola, mi nombre es Mariana</h1>
          <h3 className="hero__Iam--text">Front-End Developer</h3>
        </div>
      </section>
    </>
  );
};

export default Hero;
