import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <button className="navbar-toggler" type="button"
          data-togler="collapse" data-targer="#navbarMainToggler"
          aria-controls="navbarMainToggler" aria-expanded="false"
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <a className="navbar-brand" href="#"><i class="fas fa-stroopwafel"></i>&nbsp;DeveloperDeck01 </a>
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="https://uol.com.br">Home</a>
          <a className="nav-item nav-link" href="https://uol.com.br">Channel</a>
          <a className="nav-item nav-link" href="https://uol.com.br">Login</a>
        </div>
      </nav>
    </div>
  );
}

export default App;
