import { normalize, schema } from 'normalizr';
import dataNotifications from '../../../../notifications.json';

// User
const user = new schema.Entity('users');
const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid'
  }
);
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

export const normalizedNotifications = normalize(dataNotifications, new schema.Array(notification));

export const getAllNotificationsByUser = (userID) => {
    const notifs = dataNotifications.filter(item =>  item.author.id === userID);
    const contexts = notifs.map(item => item.context);
    return contexts;
}
