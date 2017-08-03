const app = require('../../app');
const supertest = require('supertest');
const expect = require('expect');
import request from 'supertest';


describe('get /allInfo', () => {
    it('should return allInfo', (done)=> {
        request(app)
            .get('/getAllInfo')
            .end((err, res) => {
                if (err) {
                    done.fail(err);
                }
                else {
                    let result = res.body;
                    let expectResult =
                        [{ "id":8,"userName":"李佩赏","name":"李佩赏","age":23,"sex":"女","phonenumber":"15829061748","email":"15829061748@163.com","remark":"无" }];
                    expect(result).toEqual(expectResult);
                    done();
                }
            })
    })
});