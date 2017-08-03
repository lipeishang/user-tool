/**
 * Created by lipeishang on 17-8-3.
 */
const app = require('../../app');
const supertest = require('supertest');
const expect = require('expect');
import request from 'supertest';

describe('get /searchUser',()=>{
    it('should search user return info',(done)=>{
        request(app)
            .get('/searchUser/:phonenumber')
            .expect(200,done)
    })
});