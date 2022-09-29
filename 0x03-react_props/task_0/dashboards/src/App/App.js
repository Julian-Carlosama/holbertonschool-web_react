import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footerr/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <div>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-Body">
          <Login />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;