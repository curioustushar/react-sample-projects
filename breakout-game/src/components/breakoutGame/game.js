import React, { useRef, useEffect } from 'react';
import './game.css';
import gameUtils from '../utils/game';

const Game = () => {
  const canvasRef = useRef('canvas');

  useEffect(() => {
    gameUtils.init(canvasRef);
  }, []);

  return (
    <div>
      <canvas id="canvas" ref={canvasRef} width="800" height="500"></canvas>
    </div>
  );
};

export default Game;
