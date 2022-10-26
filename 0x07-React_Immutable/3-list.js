import { List } from 'immutable';

export function getListObject(array) {
  const listArr = List(array);

  return listArr;
}
export function addElementToList(list, element) {
  const lisPush = list.push(element);

  return lisPush;
}
