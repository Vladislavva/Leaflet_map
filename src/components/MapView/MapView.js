import React, { Component, useState, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './VenueMarkers';
import 'leaflet-control-geocoder';
import TripInfo from '../TripInfo/TripInfo';
import L from "leaflet";


const MapView = () => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 49.983980, lng: 36.244644 })
  const [zoom, setZoom] = useState(12)
  const [markers, setMarkers] = useState([])

  const mapRef = useRef(<Map />);

  const addMarker = (e) => {
    const exampleMarker = {
      "geometry": [e.latlng.lat,
      e.latlng.lng]

    }
    const tempMarkers = [...markers] ;
    tempMarkers.push(exampleMarker);
    setMarkers(tempMarkers);
  }

  return (
    <Map
      onClick={addMarker}
      center={currentLocation}
      zoom={zoom}
      ref={mapRef}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
<TripInfo />
      <Markers venues={markers} />
    </Map>
  );
}

export default MapView;
