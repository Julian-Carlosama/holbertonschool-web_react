import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  const inmutableObj = fromJS(object);
  return inmutableObj;
}
