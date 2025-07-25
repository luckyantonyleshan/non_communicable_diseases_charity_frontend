import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
// import '../../styles/App.css';

const MapComponent = ({ latitude, longitude, interactive = true }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([latitude, longitude], 13);
     
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      markerRef.current = L.marker([latitude, longitude]).addTo(map)
        .bindPopup(`<b>Disease Hotspot</b><br>Lat: ${latitude}<br>Lon: ${longitude}`);

      return () => {
        map.remove();
      };
    }
  }, [latitude, longitude]);

  return (
    <div
      ref={mapRef}
      style={{
        height: '500px',
        width: '100%',
        borderRadius: '8px',
        border: '1px solid #ddd',
        margin: '20px 0'
      }}
    />
  );
};

export default MapComponent;