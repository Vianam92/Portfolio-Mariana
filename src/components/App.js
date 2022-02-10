import { Switch, Route } from "react-router-dom";
//Styles
import "../styles/App.scss";
import "../styles/Reset.scss";

//Componentes
import Hero from "./Hero";
import Header from "./pages/Header";
import Menu from "./utils/Menu";
import AboutMe from "./pages/AboutMe";
import Work from "./projects/Work";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";
import { useEffect, useState } from "react";

function App() {
  const [darkmode, setDarkMode] = useState(false);

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
      <Route path="/landing" exact>
        <Hero isdarkMode={isdarkMode} />
      </Route>
      <Switch>
        <Route path="/menu"><Menu isdarkMode={isdarkMode}/></Route>
        <Route path="/about-me" component={AboutMe} isdarkMode={isdarkMode} />
        <Route path="/skills" component={Skills} isdarkMode={isdarkMode} />
        <Route path="/projects" component={Work} isdarkMode={isdarkMode} />
        <Route path="/contacts" component={Footer} isdarkMode={isdarkMode} />
      </Switch>
    </>
  );
}

export default App;
