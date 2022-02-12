import { Switch, Route } from "react-router-dom";
//Styles
import "../styles/App.scss";
import "../styles/Reset.scss";

//Componentes
import Hero from "./pages/Hero/Hero";
import Header from "./pages/Header/Header";
import Menu from "./utils/Menu";
import AboutMe from "./pages/AboutMe/AboutMe";
import Work from "./projects/Work";
import Footer from "./pages/Footer/Footer";
import Skills from "./skills/Skills";
import Button from "../components/utils/Button";
import { useState } from "react";

function App() {
  const [darkmode, setDarkMode] = useState(false);
  const [input, setInput] = useState("");
  const [translate,setTranslate] = useState(false);

  const handleSubmit = (value) =>{
    setInput(value);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkmode);
  };

  const handleTranslate = () =>{
    setTranslate(!translate);
  };

  const isdarkMode = () => (darkmode ? "white" : "black");
  /*const isRoter = () => {
    if (location !== "/menu") {
      const link = location.replace("/menu", "");
      setActiveLink("navbar." + link);
    }
  };*/

  return (
    <>
      <Header handleDarkMode={handleDarkMode} isdarkMode={isdarkMode} handleTranslate={handleTranslate} translate={translate}/>
      <Route path="/" exact>
        <Hero isdarkMode={isdarkMode} translate={translate}/>
      </Route>
      <Switch>
        <Route path="/menu">
          <Menu isdarkMode={isdarkMode} translate={translate}/>
        </Route>
        <Route path="/about-me">
        <Button isdarkMode={isdarkMode} translate={translate}/>
        <AboutMe isdarkMode={isdarkMode} translate={translate}/>
        </Route>
        <Route path="/skills">
        <Button isdarkMode={isdarkMode} translate={translate}/>
        <Skills isdarkMode={isdarkMode} translate={translate}/>
        </Route>
        <Route path="/projects">
        <Button isdarkMode={isdarkMode} translate={translate}/>
          <Work isdarkMode={isdarkMode} translate={translate}/>
        </Route>
        <Route path="/contacts">
        <Button isdarkMode={isdarkMode} translate={translate}/>
          <Footer isdarkMode={isdarkMode} handleSubmit={handleSubmit} input={input} translate={translate}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
