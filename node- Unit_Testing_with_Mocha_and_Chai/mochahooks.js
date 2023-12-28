const assert = require('chai').assert;
let counter = 0;

describe('Mocha Hooks Test Suite', () => {
    before(() => {
        // Code to run once before any tests in this suite
        counter = 10;
    });

    after(() => {
        // Code to run once after all tests in this suite
        counter = 0;
    });

    beforeEach(() => {
        // Code to run before each test in this suite
        counter++;
    });

    afterEach(() => {
        // Code to run after each test in this suite
        counter--;
    });

    it('should increase the counter', () => {
        assert.equal(counter, 11);
    });

    it('should decrease the counter', () => {
        assert.equal(counter, 10);
    });
});
