import dataNotifications from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  const getObject = dataNotifications.filter(element => element.author.id === userId);
  return getObject;

}

export default getAllNotificationsByUser;
