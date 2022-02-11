import { Switch, Route } from "react-router-dom";
//Styles
import "../styles/App.scss";
import "../styles/Reset.scss";

//Componentes
import Hero from "./pages/Hero";
import Header from "./pages/Header";
import Menu from "./utils/Menu";
import AboutMe from "./pages/AboutMe";
import Work from "./projects/Work";
import Footer from "./pages/Footer";
import Skills from "./skills/Skills";
import Button from "../components/utils/Button";
import { useState } from "react";

function App() {
  const [darkmode, setDarkMode] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = (value) =>{
    setInput(value);
  }

  const handleDarkMode = () => {
    setDarkMode(!darkmode);
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
      <Header handleDarkMode={handleDarkMode} isdarkMode={isdarkMode} />
      <Route path="/" exact>
        <Hero isdarkMode={isdarkMode} />
      </Route>
      <Switch>
        <Route path="/menu">
          <Menu isdarkMode={isdarkMode} />
        </Route>
        <Route path="/about-me">
        <Button isdarkMode={isdarkMode}/>
          <AboutMe isdarkMode={isdarkMode} />
        </Route>
        <Route path="/skills">
        <Button isdarkMode={isdarkMode}/>
          <Skills isdarkMode={isdarkMode} />
        </Route>
        <Route path="/projects">
        <Button isdarkMode={isdarkMode}/>
          <Work isdarkMode={isdarkMode} />
        </Route>
        <Route path="/contacts">
        <Button isdarkMode={isdarkMode}/>
          <Footer isdarkMode={isdarkMode} handleSubmit={handleSubmit} input={input}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
