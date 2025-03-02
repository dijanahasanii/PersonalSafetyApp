// src/components/WebMapComponent.tsx
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const WebMapComponent = () => {
  useEffect(() => {
    // Initialize Leaflet map
    const map = L.map('map').setView([37.78825, -122.4324], 13); // Example coordinates

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return <div id="map" style={{ height: '100vh' }} />;
};

export default WebMapComponent;
