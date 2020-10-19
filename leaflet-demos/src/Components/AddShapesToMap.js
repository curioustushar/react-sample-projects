import React from 'react';
import { Map, TileLayer, Circle } from 'react-leaflet';

export const AddShapesToMap = () => {
  const state = {
    lat: 28.365724898272077,
    lng: -81.55525436402367,
    zoom: 13,
  };
  const position = [state.lat, state.lng];
  return (
    <Map center={position} zoom={state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        color="yellow"
        opacity={1}
        fillOpacity={0.8}
        dashArray={12}
        radius={500}
        fillColor="cyan"
        op
        center={position}
      />
    </Map>
  );
};
