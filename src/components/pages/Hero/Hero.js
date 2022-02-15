//import octocal from "../../../images/hero/mi_octocal.png";
//Styles
import "./Hero.scss";
import octocal from "../../../images/hero/mi_octocal.png";
import { Link } from "react-router-dom";
import translateESContain from "../../../services/es/translateES.json";
import translateENContain from "../../../services/en/translateEN.json";
//import Particles from "react-tsparticles";
//import particlesOptions from "../../../services/particles/particles.json";
import Links from "../../utils/Links";

const Hero = ({isdarkMode , translate}) => {
  const titleEN = translateENContain.Hero;
  const titleES = translateESContain.Hero;
  return (
    <>
      <section className={"hero-" + isdarkMode()}>
        {/*<div><Particles options={particlesOptions}/></div>*/}
        
        <img className={`hero-${isdarkMode()}__img`} src={octocal} alt="octocal" />
        <div className={`hero-${isdarkMode()}__Iam`}>
          <h1 className={`hero-${isdarkMode()}__Iam--title`}>{translate?titleEN.title:titleES.title}</h1> 
          <h2 className={`hero-${isdarkMode()}__Iam--title`}>{translate?titleEN.I:titleES.I}</h2>
          <h3 className={`hero-${isdarkMode()}__Iam--text`}>{translate?titleEN.am:titleES.am}</h3>
          <Link to="/menu" className={`hero-${isdarkMode()}__Iam--start`}>{translate?titleEN.btn:titleES.btn}</Link>
        </div>
        <Links isdarkMode={isdarkMode}/>
      </section>
    </>
  );
};

export default Hero;
