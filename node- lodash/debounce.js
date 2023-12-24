const _ = require('lodash');

const user = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
};

const selectedProperties = _.pick(user, ['name', 'email']);
console.log(selectedProperties);
