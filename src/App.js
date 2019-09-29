import React from 'react';
import {Router,Switch,Route} from "./Router/index"
import HomePage from './screens/HomePage';
import AnimalReports from "./screens/AnimalRepotsPage"
import AnimalReport from "./screens/AnimalReportPage"
import AlreadyHelped from "./screens/AlreadyHelped"
import AfterHelp from './screens/AfterHelp';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={HomePage}/>
       <Route exact path="/animal-report" component={AnimalReport}/>
       <Route exact path="/animal-reports" component={AnimalReports}/>
       <Route exact path="/alreadyhelped" component={AlreadyHelped}/>
       <Route exact path="/afterhelp" component={AfterHelp}/>
     </Switch>
   </Router>
  );
}


export default App;
