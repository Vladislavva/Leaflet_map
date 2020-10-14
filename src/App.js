import React from 'react';
import MapView from './components/MapView/MapView';
import './App.scss';
import { Util } from 'leaflet';
import TripInfo from './components/TripInfo/TripInfo';

function App() {
  return (
    <div className="App">
      <MapView/>
      <TripInfo/>
    </div>
  );
}

export default App;
