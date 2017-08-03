const app = require('../../app');
const supertest = require('supertest');
const expect = require('expect');
import request from 'supertest';

describe('get /allInfo', () => {
    it('should return allInfo', (done)=> {
        request(app)
            .get('/getAllInfo')
            .expect(200,done)
    })
});