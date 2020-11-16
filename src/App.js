import React from 'react';
import MapView from './components/MapView/MapView';
import './App.scss';
import { Util } from 'leaflet';
import TripInfo from './components/TripInfo/TripInfo';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Redirect to="/find" />
              )
            }}
          />
          <Route path="/find" component={MapView} />
          <Route path="/create">
            <MapView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
