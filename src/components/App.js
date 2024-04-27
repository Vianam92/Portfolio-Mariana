import { Switch, Route, useLocation } from "react-router-dom";
//Styles
import "../styles/App.scss";
import "../styles/Reset.scss";

//Componentes
import Hero from "./pages/Hero/Hero";
import Header from "./pages/Header/Header";
/* import Menu from "./utils/Menu"; */
import AboutMe from "./pages/AboutMe/AboutMe";
import Work from "./projects/Work";
import Footer from "./pages/Footer/Footer";
import Skills from "./skills/Skills";
/* import Button from "../components/utils/Button";
import { AnimatePresence } from "framer-motion"; */
import { useState } from "react";

function App() {
  const [darkmode, setDarkMode] = useState(false);
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const [translate, setTranslate] = useState(false);
  //const [activeLink, setActiveLink] = useState("");

  const handleSubmit = (value) => {
    setInput(value);
  };

  const handleTextarea = (value) => {
    setTextarea(value);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkmode);
  };

  const handleTranslate = () => {
    setTranslate(!translate);
  };

  const isdarkMode = () => (darkmode ? "white" : "black");

  /*const isRoter = () => {
    if (location !== "/menu" && location !== "/landing") {
      const link = location.replace("/menu", " ");
      setActiveLink("navbar." + link);
    }
  };*/

/*   const location = useLocation(); */
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  const pageStyle = {
    position: "relative",
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <>
      <Header
        handleDarkMode={handleDarkMode}
        isdarkMode={isdarkMode}
        handleTranslate={handleTranslate}
        translate={translate}
      />
      <Route path="/" exact>
        <Hero isdarkMode={isdarkMode} translate={translate} />
        <AboutMe
          isdarkMode={isdarkMode}
          translate={translate}
          pageVariants={pageVariants}
          pageTransition={pageTransition}
          pageStyle={pageStyle}
        />
        <Skills
          isdarkMode={isdarkMode}
          translate={translate}
          pageVariants={pageVariants}
          pageTransition={pageTransition}
          pageStyle={pageStyle}
        />
        <Work
          isdarkMode={isdarkMode}
          translate={translate}
          pageVariants={pageVariants}
          pageTransition={pageTransition}
          pageStyle={pageStyle}
        />
        <Footer
          isdarkMode={isdarkMode}
          handleSubmit={handleSubmit}
          input={input}
          textarea={textarea}
          handleTextarea={handleTextarea}
          translate={translate}
          pageVariants={pageVariants}
          pageTransition={pageTransition}
          pageStyle={pageStyle}
        />
      </Route>
      {/* <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route path="/menu">
          <Menu isdarkMode={isdarkMode} translate={translate} pageVariants={pageVariants} pageTransition={pageTransition} pageStyle={pageStyle}/>
        </Route>
        <Route path="/about-me">
        <Button isdarkMode={isdarkMode} translate={translate}/>
        <AboutMe isdarkMode={isdarkMode} translate={translate} pageVariants={pageVariants} pageTransition={pageTransition} pageStyle={pageStyle}/>
        </Route>
        <Route path="/skills">
        <Button isdarkMode={isdarkMode} translate={translate}/>
        <Skills isdarkMode={isdarkMode} translate={translate} pageVariants={pageVariants} pageTransition={pageTransition} pageStyle={pageStyle}/>
        </Route>
        <Route path="/projects">
        <Button isdarkMode={isdarkMode} translate={translate}/>
          <Work isdarkMode={isdarkMode} translate={translate} pageVariants={pageVariants} pageTransition={pageTransition} pageStyle={pageStyle}/>
        </Route>
        <Route path="/contacts">
        <Button isdarkMode={isdarkMode} translate={translate}/>
          <Footer isdarkMode={isdarkMode} handleSubmit={handleSubmit} input={input} textarea={textarea} handleTextarea={handleTextarea} translate={translate} pageVariants={pageVariants} pageTransition={pageTransition} pageStyle={pageStyle}/>
        </Route>
      </Switch>
      </AnimatePresence> */}
    </>
  );
}

export default App;
