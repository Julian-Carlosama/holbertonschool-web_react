import { Map } from "immutable";

export default function getImmutableObject(object) {
  const inmutableMap = Map(object);
  return inmutableMap;
}
