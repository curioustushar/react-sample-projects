import React, { useRef, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import nationalParks from './../national-parks.json';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const AddGeoJSON = () => {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    if (!map) return;
    const parkGeojson = new L.GeoJSON(nationalParks, {
      onEachFeature: (feature = {}, layer) => {
        const { properties = {} } = feature;
        const { Name } = properties;
        layer.bindPopup(`<p>${Name}</p>`);
      },
    });
    parkGeojson.addTo(map);
    return () => {};
  }, [mapRef]);

  return (
    <Map ref={mapRef} center={[39.5, -98.35]} zoom={5}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
};
