import { List } from "immutable";

export default function getListObject(array) {
  const listArr = List(array);

  return listArr;
}

export default function addElementToList(list, element) {
  const lisPush = list.push(element);

  return lisPush;
}
