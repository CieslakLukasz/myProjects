import React, {useState} from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import initialProjects from './lists/projects';
import initialSkills from './lists/skills';
import initialAbout from './lists/about';

import Header from "./Header/Header";
import Content from "./Content/Content";


export default function App() {
  const [display, setDisplay] = useState(initialSkills[0])

  const changeDisplay = (e) => {
      setDisplay(e);
  }

  return (
    <div>
      <BrowserRouter>
        <Header display={display} />
        <Switch>
          <Route exact path="/">
            <Content initialList={initialSkills} changeDisplay={changeDisplay} />
          </Route>
          <Route path="/projects">
            <Content initialList={initialProjects} changeDisplay={changeDisplay} />
          </Route>
          <Route path="/about">
            <Content initialList={initialAbout} changeDisplay={changeDisplay} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
