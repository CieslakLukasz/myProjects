import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './Header/Header';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import About from './About/About';




export default function App() {
  return(
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
  )
}
