import React, { useState, useEffect } from 'react';
import L from 'leaflet';
function RiderMap() {
  const [map, setMap] = useState(null);
  const [riderLocation, setRiderLocation] = useState([40.7128, -74.0060]);
  const [destinationLocation, setDestinationLocation] = useState([37.7749, -122.4194]);
  useEffect(() => {
    // create map
    const newMap = L.map('map').setView(riderLocation, 13);
    // add tile layer to map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(newMap);
    // add rider marker to map
    const riderMarker = L.marker(riderLocation).addTo(newMap);
    // add destination marker to map
    const destinationMarker = L.marker(destinationLocation).addTo(newMap);
    // update map and rider marker
    setMap(newMap);
    riderMarker.setLatLng(riderLocation);
  }, [riderLocation, destinationLocation]);
  // function to update rider location
  function updateRiderLocation(newLocation) {
    setRiderLocation(newLocation);
  }
  return (
    <div id="map" style={{ height: '500px' }}></div>
  );
}
export default RiderMap;