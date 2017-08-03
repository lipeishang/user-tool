/**
 * Created by lipeishang on 17-8-3.
 */
const app = require('../../app');
const supertest = require('supertest');
const expect = require('expect');
import request from 'supertest';

describe('test search user',()=>{
    it('should search user is true',(done)=>{
        request(server)
            .post('/searchUser')
            .send({userName:'ly'})
            .expect(200,done)
    })
});