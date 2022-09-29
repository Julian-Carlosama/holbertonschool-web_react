import React from 'react';
import './Notifications.css';
import closeIcon from '../close-icon.png';
import {getLatestNotification} from '../Utils/utils';

export const Notification = () => {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>

      <button>
        <style></style>
      </button>
    </div>
  )
}