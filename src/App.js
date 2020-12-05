import React from 'react';
import Home from "./Home"
import Nav from "./Nav";
import AvatarDesc from "./AvatarDesc";
import ZwarDesc from "./ZwarDesc";
import TerminatorDesc from "./TerminatorDesc";
import PrisonDesc from "./PrisonDesc";
import JasonDesc from "./JasonDesc";
import Accueil from "./Accueil";
import Projets from "./Projets";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';


function App () {

  return (
    <div>
   
   <Router forceRefresh={true}>

   <Switch>
   <Route path="/" exact component={Home}/> 
   <Route path="/AvatarDesc" exact component={AvatarDesc}/> 
   <Route path="/ZwarDesc" exact component={ZwarDesc}/> 
   <Route path="/TerminatorDesc" exact component={TerminatorDesc}/> 
   <Route path="/PrisonDesc" exact component={PrisonDesc}/> 
   <Route path="/JasonDesc" exact component={JasonDesc}/> 
   </Switch>
   </Router>
   

    </div>
  );
}

  

export default App;
