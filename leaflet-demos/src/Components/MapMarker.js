import React from 'react';
import L from 'leaflet';
import { MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const MapMarker = () => {
  const position = [28.7041, 77.1025];
  return (
    <Map center={position} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Delhi - Rohtak Rd, near gagan chouraha, opposite water tank, <br />
          Rohini, moradabad, Delhi 110085
        </Popup>
      </Marker>
    </Map>
  );
};
