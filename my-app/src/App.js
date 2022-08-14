import './App.css';
import Nav from './components/Nav.js';
import UnicefBanner from './components/UnicefBanner.js';
import Body from './components/Body.js';
import Footer from './components/Footer';
import React from 'react';



function App() {
  return (
    <div className="App">
      <Nav />
      <UnicefBanner />
      <Body />
      <Footer />
    </div >
  );
}

export default App;
