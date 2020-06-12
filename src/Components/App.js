import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home';
//import Teams from './Teams/Teams';
//import Team from './Teams/Team';
//import Drivers from './Drivers/Drivers';
import Calendar from './Calendar/Calendar';
import Race from './Calendar/Race';
//import CarTechnical from './CarTechnical/CarTechnical';
//import FIA from './FIA/FIA';
import Navbar from './Navbar/Navbar';
import RaceContextProvider from '../Context/RaceContext';

function App() {
  return (
    <RaceContextProvider>
      <BrowserRouter>
        <div>
          <Navbar />

          <Route exact path="/" component={Home} />
          {/*<Route exact path="/teams" component={Teams} />
          <Route exact path="/team/:teamid" component={Team} />
          <Route exact path="/drivers" component={Drivers} />*/}
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/race/:raceID" component={Race} />
          {/*<Route exact path="/cartech" component={CarTechnical} />
          <Route exact path="/fia" component={FIA} />*/}
        </div>
      </BrowserRouter>
    </RaceContextProvider>
  );
}

export default App;
