import "../styles/App.scss";
import "../styles/Reset.scss";
import Header from "./Header";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

        <Switch>
          <Route exact path="/about-me">
            <AboutMe />
            <Footer/>
          </Route>
          <Route exact path="/projects">
            <Work />
            <Footer/>
          </Route>
          <Route exact path="/Inicio">
            <Hero />
            <Footer/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
