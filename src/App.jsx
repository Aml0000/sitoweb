import React from 'react';
import './styles/app.css';
import SocialLinks from './components/SocialLinks';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Sito in costruzione 🚧</h1>
        <p>Stiamo lavorando per voi! Nel frattempo, seguici sui nostri social:</p>
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
