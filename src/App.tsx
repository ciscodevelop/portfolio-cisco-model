import React, { createContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import NavBar from "./conponents/navBar/NavBar";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import "./App.scss";
import NotFound from "./pages/404/NotFound";

export const LinguaContext1 = createContext<any>(null);

function App() {
  const [lingua, setLingua] = useState("it");
  return (
    <LinguaContext1.Provider value={{ lingua, setLingua }}>
      <div className="app-container  ">
        <header className="app-header">
          <NavBar />
        </header>
        <main className="main-container">
          <Switch>
            <Route path={"/"} exact component={Home}></Route>
            <Route
              path={"/portfolio-cisco-model"}
              exact
              component={Home}
            ></Route>
            <Route path={"/skills"} exact component={Skills}></Route>
            <Route path={"/projects"} exact component={Projects}></Route>
            <Route path={"/about"} exact component={About}></Route>
            <Route path={"/contact"} exact component={Contact}></Route>
            <Route path={"*"} exact component={NotFound}></Route>
          </Switch>
        </main>
      </div>
    </LinguaContext1.Provider>
  );
}

export default App;
