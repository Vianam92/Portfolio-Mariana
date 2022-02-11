import octocal from "../../images/hero/mi_octocal.png";
//Styles
import "../../styles/Hero.scss";
import "../../styles/Variables.scss";
import { Link } from "react-router-dom";
//import Particles from "react-tsparticles";
//import particlesOptions from "../particles.json";
import Links from "../utils/Links";

const Hero = ({isdarkMode}) => {
  
  return (
    <>
      <section className={"hero-" + isdarkMode()}>
        {/*<div> <Particles options={particlesOptions}/></div>*/}
        <img className={`hero-${isdarkMode()}__img`} src={octocal} alt="octocal" />
        <div className={`hero-${isdarkMode()}__Iam`}>
          <h1 className={`hero-${isdarkMode()}__Iam--title`}>Hola 👋🏻️</h1> 
          <h2 className={`hero-${isdarkMode()}__Iam--title`}>Mi nombre es Mariana</h2>
          <h3 className={`hero-${isdarkMode()}__Iam--text`}>Front-End Developer</h3>
          <Link to="/menu" className={`hero-${isdarkMode()}__Iam--start`}>Comenzar</Link>
        </div>
        <Links isdarkMode={isdarkMode}/>
      </section>
    </>
  );
};

export default Hero;
