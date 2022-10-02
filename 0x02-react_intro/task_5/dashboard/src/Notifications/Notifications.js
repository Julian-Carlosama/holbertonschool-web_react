import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from '../assets/close-icon.png';

export const Notifications = () => {
  return (
    <div className='Notifications'>
      <button style={{ "aria-label": "Close" }}
        onClick={console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close-icon" width='10px' />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
};

export default Notifications;