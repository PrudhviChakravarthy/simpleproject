const assert = require('chai').assert;
const sinon = require('sinon');

function add(a, b) {
    return a + b;
}

describe('Mocha with Sinon Test Suite', () => {
    it('should call the mock function', () => {
        const mockAdd = sinon.fake.returns(10);

        const result = add(2, 3);
        assert.equal(result, 10);

        assert(mockAdd.calledOnce);
        assert(mockAdd.calledWith(2, 3));
    });
});
