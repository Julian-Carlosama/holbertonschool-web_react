import React from 'react';
import logo from '../assets/HolbertonLogo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email: </label>
        <input id="email" type="email"/>
        <label for="password">Password: </label>
        <input id="password" type="password"/>
        <button id="buttom_ok">OK</button>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
