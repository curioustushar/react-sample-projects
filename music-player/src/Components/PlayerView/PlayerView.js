import React from 'react';
import { Tracker } from './../Tracker/Tracker';
import { SongInfo } from './../SongInfo/SongInfo';
import { VolumeControl } from './../VolumeControl/VolumeControl';
import './PlayerView.css';

import { PlayerActions } from './../PlayerActions/PlayerActions';

export const PlayerView = ({ name, cover, isVolumeControl, className }) => {
  return (
    <div className={`${className} album-cover`}>
      <img src={cover} alt={name} id="cover" />
      <Tracker />
      <SongInfo />
      <PlayerActions />
      {isVolumeControl && <VolumeControl />}
    </div>
  );
};
