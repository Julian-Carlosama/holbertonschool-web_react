import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications/Notifications';
import App from './App/App';


ReactDOM.render(
  <React.StrictMode>
    <Notifications />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
