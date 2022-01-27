import octocal from "../images/hero/mi_octocal.png";
import "../styles/Hero.scss";
import "../styles/Variables.scss";
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";
import Links from "./Links";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div> <Particles options={particlesOptions}/></div>
        <img className="hero__img" src={octocal} alt="octocal" />
        <div className="hero__Iam">
          <h1 className="hero__Iam--title">Hola 👋🏻️</h1> 
          <h2 className="hero__Iam--title">Mi nombre es Mariana</h2>
          <h3 className="hero__Iam--text">Front-End Developer</h3>
        </div>
        <Links/>
      </section>
    </>
  );
};

export default Hero;
