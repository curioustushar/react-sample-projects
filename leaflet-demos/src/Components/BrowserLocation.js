import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import { MapContainer as Map, TileLayer } from 'react-leaflet';

export const BrowserLocation = () => {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    map.locate({ setView: true });
    map.on('locationFound', handelOnLocationFound);
    return () => {};
  }, [mapRef]);

  function handelOnLocationFound(e) {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    const latlng = e.latlng;
    const radius = e.accuracy;
    const circle = L.Circle(latlng, radius);
    circle.addTo(map);
    return;
  }
  return (
    <Map ref={mapRef} center={[0, 0]} zoom={12}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
};
