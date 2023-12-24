const _ = require('lodash');

const data = [
    { department: 'HR', employee: 'Alice' },
    { department: 'IT', employee: 'Bob' },
    { department: 'HR', employee: 'Charlie' },
    { department: 'IT', employee: 'David' },
];

const groupedData = _.groupBy(data, 'department');
console.log(groupedData);
