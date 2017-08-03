/**
 * Created by lipeishang on 17-8-3.
 */
const request = require('supertest');
const server = require('../../server');

describe('test delte user', ()=> {
    it('should delte user is true', (done)=> {
        request(server)
            .post('/deleteUser')
            .send({id:50})
            .expect(200,{status:true},done)
    })
});