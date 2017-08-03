/**
 * Created by lipeishang on 17-8-3.
 */
const app = require('../../app');
const supertest = require('supertest');
const expect = require('expect');
import request from 'supertest';
let db = require('../../server/tools/connection');

describe('post /insert', () => {
      var user;
      beforeEach( ()=> {
      user = {
            userName:'李佩赏',
            name:'李佩赏',
            sex:'女',
            age:23,
            phonenumber:'15829061748',
            email:'15829061748@163.com',
            remark:'无'
        }
    });
    afterEach(()=>{
        db.query("SELECT * FROM userInfo WHERE phonenumber=?",user.phonenumber)
    });
    it('should insert user is true',(done) => {
        request(app)
            .post('/insertUser')
            .send(user)
            .expect(200,done);
    })
});