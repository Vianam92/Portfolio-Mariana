//import octocal from "../../../images/hero/mi_octocal.png";
//Styles
import "./Hero.scss";
import { Link } from "react-router-dom";
//import Particles from "react-tsparticles";
//import particlesOptions from "../../../services/particles/particles.json";
import Links from "../../utils/Links";

const Hero = ({isdarkMode}) => {
  
  return (
    <>
      <section className={"hero-" + isdarkMode()}>
        {/*<div> <Particles options={particlesOptions}/></div>*/}
        {/*<img className={`hero-${isdarkMode()}__img`} src={octocal} alt="octocal" />*/}
        <div className={`hero-${isdarkMode()}__Iam`}>
          <h1 className={`hero-${isdarkMode()}__Iam--title`}>Bienve️nid@ a mi Portafolio</h1> 
          <h2 className={`hero-${isdarkMode()}__Iam--title`}>Mi nombre es Mariana</h2>
          <h3 className={`hero-${isdarkMode()}__Iam--text`}>y soy Front-End Developer</h3>
          <Link to="/menu" className={`hero-${isdarkMode()}__Iam--start`}>Conoceme</Link>
        </div>
        <Links isdarkMode={isdarkMode}/>
      </section>
    </>
  );
};

export default Hero;
