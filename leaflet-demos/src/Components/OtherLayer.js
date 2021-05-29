import React from 'react';
import {
  MapContainer as Map,
  TileLayer,
  Circle,
  LayerGroup,
  FeatureGroup,
} from 'react-leaflet';

const defaultCenter = [38.8972, -77.0369];

const whiteHouse = [38.8977, -77.0365];
const eisenhowerOffice = [38.898093, -77.03854];
const washingtonMountain = [38.8895, -77.0353];
const lincolnMemorial = [38.8893, -77.0502];
const worlwarTwoMemorial = [38.8894, -77.0405];
const jeffersonMemorial = [38.8814, -77.0365];

export const OtherLayer = () => {
  return (
    <Map center={defaultCenter} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        <Circle color="yellow" radius={400} center={whiteHouse} />
        <Circle color="green" radius={200} center={eisenhowerOffice} />
      </LayerGroup>
      <FeatureGroup opacity={1} color="tomato">
        <Circle color="red" radius={200} center={washingtonMountain} />
        <Circle color="blue" radius={200} center={lincolnMemorial} />
        <Circle color="magenta" radius={200} center={worlwarTwoMemorial} />
        <Circle color="purple" radius={200} center={jeffersonMemorial} />
      </FeatureGroup>
    </Map>
  );
};
