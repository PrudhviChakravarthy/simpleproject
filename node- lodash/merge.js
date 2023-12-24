const _ = require('lodash');

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

const mergedObject = _.merge(object1, object2);
console.log(mergedObject);
