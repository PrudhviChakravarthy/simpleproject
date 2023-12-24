const _ = require('lodash');

const products = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    { id: 3, name: 'Product C', price: 15 },
];

const expensiveProducts = _.filter(products, (product) => product.price > 10);
console.log(expensiveProducts);
