import { Map } from "immutable";

export default function getImmutableObject(object) {
    const inmutableMap = Map(object)
    return inmutableMap;
}

console.log(getImmutableObject({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
}));
