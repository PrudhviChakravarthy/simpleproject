const assert = require('chai').assert;

async function asyncAdd(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

describe('Async Test Suite', () => {
    it('should return the sum of two numbers asynchronously', async () => {
        const result = await asyncAdd(2, 3);
        assert.equal(result, 5);
    });
});
