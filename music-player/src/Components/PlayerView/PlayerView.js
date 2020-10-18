import React, { memo } from 'react';
import { Tracker } from './../Tracker/Tracker';
import { SongInfo } from './../SongInfo/SongInfo';
import { VolumeControl } from './../VolumeControl/VolumeControl';
import './PlayerView.css';

import { PlayerActions } from './../PlayerActions/PlayerActions';

const PlayerViewComp = ({ name, cover, isVolumeControl }) => {
  return (
    <div className="album-cover">
      <img src={cover} alt={name} id="cover" />
      <Tracker />
      <SongInfo />
      <PlayerActions />
      {isVolumeControl && <VolumeControl />}
    </div>
  );
};

export const PlayerView = memo(PlayerViewComp);
