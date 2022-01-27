import "../styles/App.scss";
import "../styles/Reset.scss";
import Header from "./Header";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import Skills from "./Skills";
import {useState} from 'react';
//import dataWork from '../services/work.json';
//import Menu from "./Menu";

function App() {
  //const [work, setWork] = useState(dataWork);

return (
    <>
      <Header/>
      <Switch>
          <Route path="/about-me" exact>
            <AboutMe />
            <Skills/>
            <Footer/>
      
          </Route>
          <Route path="/projects" exact>
            <Work/>
            <Footer/>
    
          </Route>
          <Route path="/" exact>
            <Hero />
     
          </Route>
        </Switch>
    </>
  );
}

export default App;
