import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import GoogleSearch from './googleSearch/GoogleSearch';
import GoogleImage from './googleImage/GoogleImage' ;
import GoogleAdv from './googleAdv/GoogleAdv';




function App() {
  return (
    <div className="App">
     <HashRouter>
        <Switch>
          <Route exact path="/" component={GoogleSearch} />
          <Route path="/ImageSearch" component={GoogleImage} />       
          <Route path="/AdvancedSearch" component={GoogleAdv} />       
         </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

//  <Route path="/memory" render={() =><Memory winW={winW}/>} />