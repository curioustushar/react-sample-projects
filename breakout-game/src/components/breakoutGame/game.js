import React, { useRef, useEffect } from 'react';
import gameUtils from '../../utils/game';
import './game.css';

const Game = () => {
  const canvasRef = useRef('canvas');

  useEffect(() => {
    gameUtils.init(canvasRef);
  }, []);

  return <canvas id="canvas" ref={canvasRef} width="800" height="500"></canvas>;
};

export default Game;
