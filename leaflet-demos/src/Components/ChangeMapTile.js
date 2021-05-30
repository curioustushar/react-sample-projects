import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

export const ChangeMapTile = () => {
  const position = [28.7041, 77.1025];
  return (
    <Map center={position} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs">More info about NASA GIBS imagery </a> contributors'
        url="https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/BlueMarble_ShadedRelief_Bathymetry/default/EPSG3857_500m/{z}/{y}/{x}.jpeg"
      />
    </Map>
  );
};
