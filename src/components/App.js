import React, {useState} from "react";
import { BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import { Nav} from 'bootstrap-4-react';

import './App.scss';
import Task0 from './task0/Task0';
import Task1 from './task1/Task1';

function App() {
  const [active, setActive] = useState('task0');

  const handleClick = (e) => {
    setActive(e.target.name)
  }

  return (
    <BrowserRouter>
    <div className="App">
    <Nav tabs >
    <Nav.ItemLink active={active==='task0' ? 'active' : ''}><NavLink exact to='/' onClick={handleClick} name='task0'>Task0</NavLink></Nav.ItemLink>
    <Nav.ItemLink active={active==='task1' ? 'active' : ''}><NavLink exact to='/task1' onClick={handleClick} name='task1'>Task1</NavLink></Nav.ItemLink>
    </Nav>
    <Switch>
         <Route exact path="/" component={Task0} />
         <Route path="/task1" component={Task1} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

//  <Route path="/memory" render={() =><Memory winW={winW}/>} />
