const app = require('../../app');
const supertest = require('supertest');
const expect = require('expect');
import request from 'supertest';

describe('delete /deleteUser', () => {
    it('should return "status":true', (done)=> {
        request(app)
            .post('/deleteUser')
            .send({"id":2})
            .end((err, res) => {
                if (err) {
                    done.fail(err);
                }
                else {
                    let result = res.body;
                    let expectResult =
                        {"status":true};
                    expect(result).toEqual(expectResult);
                    done();
                }
            })
    })
});