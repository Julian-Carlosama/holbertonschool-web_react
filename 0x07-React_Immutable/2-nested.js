import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mapObj = fromJS(object);
  const pathObj = mapObj.getIn(array);

  return pathObj;
}
