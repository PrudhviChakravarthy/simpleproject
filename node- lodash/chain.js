const _ = require('lodash');

const data = [1, 2, 3, 4, 5];

const result = _(data)
    .map((num) => num * 2)
    .filter((num) => num % 4 === 0)
    .value();

console.log(result);
