import { fromJS } from "immutable";

export default function accessImmutableObject(object, array) {
  const mapObj = fromJS(object);
  const pathObj = mapObj.getIn(array);

  return pathObj;
}

console.log(accessImmutableObject({
  name: {
    first: "Guillaume",
    last: "Salva"
  }
}, ['name', 'first']))