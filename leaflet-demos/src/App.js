import React, { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';

import { MapMarker } from './Components/MapMarker';
import { MapInterface } from './Components/MapInterface';
import { AddShapesToMap } from './Components/AddShapesToMap';
import { CustomZoomControl } from './Components/CustomZoomControl';
import { AddGeoJSON } from './Components/AddGeoJSON';
import { ChangeMapTile } from './Components/ChangeMapTile';
import { OtherLayer } from './Components/OtherLayer';
import { BrowserLocation } from './Components/BrowserLocation';

const demoList = [
  {
    key: 'MapMarker',
    label: 'Add Marker to the Map',
  },
  {
    key: 'AddShapesToMap',
    label: 'Add Shapes to the Map',
  },
  {
    key: 'MapInterface',
    label: 'Interface with the Map',
  },
  {
    key: 'CustomZoomControl',
    label: 'Custom Zoom Control',
  },
  {
    key: 'AddGeoJSON',
    label: 'Add GeoJSON to the Map',
  },
  {
    key: 'OtherLayer',
    label: 'Other layers (LayerGroup, FeatureGroup)',
  },
  // {
  //   key: 'ChangeMapTile',
  //   label: 'ChangeMapTile',
  // },
  {
    key: 'BrowserLocation',
    label: 'Browser geo Location update',
  },
];
function App() {
  const [demo, setDemo] = useState('MapMarker');

  const getComponent = () => {
    switch (demo) {
      case 'MapMarker':
        return <MapMarker />;
      case 'AddShapesToMap':
        return <AddShapesToMap />;
      case 'MapInterface':
        return <MapInterface />;
      case 'CustomZoomControl':
        return <CustomZoomControl />;
      case 'AddGeoJSON':
        return <AddGeoJSON />;
      case 'OtherLayer':
        return <OtherLayer />;
      case 'ChangeMapTile':
        return <ChangeMapTile />;
      case 'BrowserLocation':
        return <BrowserLocation />;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <select value={demo} onChange={(e) => setDemo(e.target.value)}>
        {demoList.map((i) => (
          <option key={i.key} value={i.key}>
            {i.label}
          </option>
        ))}
      </select>
      {getComponent()}
    </div>
  );
}

export default App;
