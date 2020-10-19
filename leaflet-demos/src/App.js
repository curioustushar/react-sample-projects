import React, { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';

import { MapMarker } from './Components/MapMarker';
import { MapInterface } from './Components/MapInterface';
import { AddShapesToMap } from './Components/AddShapesToMap';
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
