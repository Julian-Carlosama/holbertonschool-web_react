import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

it('check year', () => {
  expect(getFullYear()).toEqual(2020);
});

it('check footer copy', () => {
  expect(getFooterCopy(true)).toEqual('Holberton School');
  expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
})

it('check latest notifications', () => {
  expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
})
