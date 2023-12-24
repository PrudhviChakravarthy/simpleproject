const _ = require('lodash');

const originalObject = {
    a: 15,
    b: {
        c: 232,
    },
};

const clonedObject = _.cloneDeep(originalObject);
console.log(clonedObject);
