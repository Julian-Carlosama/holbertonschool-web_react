import React from "react";
import "./Notifications.css";
import { logClickClose, getLatestNotification } from "../utils/utils";
import closeicon from '../assets/close-icon.png';

export function Notification() {
  return (
    <div className="Notifications">
      <p> Here is the list of notifications </p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
      <button
        className='close-icon'
        aria-label='Close'
        onClick={logClickClose}
      > 
        <img 
          alt="close"
          src={closeicon}
          style={
            {
              height: "20px",
              width: "20px",
              visibility: "visible"
            }
          }></img>
      </button>
    </div>
  )

}

export default Notification;
