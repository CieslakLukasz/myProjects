import React from "react";
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";

import './App.scss';
import Task0 from './task0/Task0';





function App() {
  return (
    <div className="App">
     <HashRouter>
     <nav>
        <ul>
        <li><NavLink exact to="/">Task 0</NavLink></li>
        <li><NavLink exact to="/task1">Task 1</NavLink></li>

        </ul>
      </nav>
        <Switch>
          <Route exact path="/" component={Task0} />

         </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

//  <Route path="/memory" render={() =><Memory winW={winW}/>} />