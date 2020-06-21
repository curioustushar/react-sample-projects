import React, { createContext, useState } from 'react';

const initialState = { items: [] };
const StoreContext = createContext([{}, () => {}]);

const StoreContextProvider = (props) => {
  const [cart, setCart] = useState(initialState);
  const emptyCart = () => {
    setCart(initialState);
  };
  const playSound = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    let filter = audioContext.createBiquadFilter();
    let oscillator = audioContext.createOscillator();
    oscillator.type = 'square';
    oscillator.connect(filter);
    filter.connect(audioContext.destination);
    filter.type = 'highpass';
    filter.frequency.setTargetAtTime(2000, audioContext.currentTime, 1);
    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
    }, 150);
  };
  const addItemToCart = (item) => {
    const items = [...cart.items];
    const foundIndex = items.findIndex((i) => i.id === item.id);
    if (foundIndex > -1) {
      items[foundIndex].quantity = items[foundIndex].quantity + 1;
    } else {
      items.push({ ...item, quantity: 1 });
    }
    setCart({ ...cart, items });
    playSound();
  };
  const removeItemToCart = (item) => {
    const items = [...cart.items];
    const foundIndex = items.findIndex((i) => i.id === item.id);
    items.splice(foundIndex, 1);
    setCart({ ...cart, items });
  };
  return (
    <StoreContext.Provider
      value={[cart, addItemToCart, removeItemToCart, emptyCart]}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContextProvider, StoreContext };
