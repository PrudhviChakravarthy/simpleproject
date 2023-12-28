const assert = require('chai').assert;

function add(a, b) {
    return a + b;
}

describe('Basic Test Suite', () => {
    it('should return the sum of two numbers', () => {
        assert.equal(add(2, 3), 5);
    });
});
