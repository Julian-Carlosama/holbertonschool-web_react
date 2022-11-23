import getAllNotificationsByUser from './notifications';
import { expect as expect2 } from 'chai';

describe('Notifications schema', () => {
    test('Returns correct contexts', () => {

      const notifs = getAllNotificationsByUser('5debd764a7c57c7839d722e9');

      // Returned content check
      expect2(notifs.length).to.equal(2);
      expect2(notifs[0].guid).to.equal('2d8e40be-1c78-4de0-afc9-fcc147afd4d2');
      expect2(notifs[1].guid).to.equal('280913fe-38dd-4abd-8ab6-acdb4105f922');

      // Context items have correct values check
      expect(notifs.some((notif) => notif.isRead === undefined)).toBe(false);
      expect(notifs.some((notif) => notif.type === undefined)).toBe(false);
      expect(notifs.some((notif) => notif.value === undefined)).toBe(false);
  
      expect(notifs.some((notif) => Object.keys(notif).length !== 4)).toBe(false);
    });
    test('Gives empty contexts with wrong id', () => {
        const notiWrong = getAllNotificationsByUser('45');
        expect2(notiWrong.length).to.equal(0);
    });
});
