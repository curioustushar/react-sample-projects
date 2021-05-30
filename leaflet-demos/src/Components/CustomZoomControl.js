import React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';

export const CustomZoomControl = () => {
  const position = [28.7041, 77.1025];
  return (
    <Map center={position} zoom={13} zoomControl={false}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" zoomInText="🧐" zoomOutText="🗺️" />
    </Map>
  );
};
