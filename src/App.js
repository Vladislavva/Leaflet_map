import React from 'react';
import MapView from './components/MapView/MapView';
import './App.scss';
import { Util } from 'leaflet';
import TripInfo from './components/TripInfo/TripInfo';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Switch>

          <Route exact path="/">
            <MapView />
            <TripInfo />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
