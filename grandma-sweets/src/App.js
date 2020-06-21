import React from 'react';
import Store from './components/Store/Store';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import { BacktoTop } from './components/BacktoTop/BacktoTop';
import { StoreContextProvider } from './components/StoreContextProvider/StoreContextProvider';
function App() {
  const backToTophandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <StoreContextProvider>
      <>
        <Navbar />
        <Home />
        <About />
        <Store />
        <BacktoTop onClick={backToTophandler} />
      </>
    </StoreContextProvider>
  );
}

export default App;
