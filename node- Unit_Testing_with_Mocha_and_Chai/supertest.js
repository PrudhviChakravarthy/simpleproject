const assert = require('chai').assert;
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is a test API' });
});

describe('Mocha with Supertest Test Suite', () => {
    it('should return the expected JSON response from the API', (done) => {
        request(app)
            .get('/api/data')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                assert.equal(res.body.message, 'This is a test API');
                done();
            });
    });
});
