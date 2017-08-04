/**
 * Created by lipeishang on 17-8-3.
 */
const app = require('../../app');
const expect = require('expect');
import request from 'supertest';
let db = require('../../server/tools/connection');

describe('test modify userInfo',()=>{
    let id;
    beforeEach(()=>{
        db.query('insert into userInfo (userName,name,sex,age,phonenumber,email,remark) values (?,?,?,?,?,?,?)',["lipeizi","lipeizi","女",22,"18716032317",
            "18716032317@163.com","无"],(err, result)=>{
            id = result.insertId;
        })
    });

    it('should modify user return result',(done)=>{
        request(app)
            .post('/modifyUser')
            .send({
                "newUserName":'nh',
                "newName":'nihao',
                "newSex":'男',
                "newAge":20,
                "newPhonenumber":'18716032317',
                "newEmail":'236256@qq.com',
                "newRemark":'love',
                "id":1
            })
            .expect(200,done);
             done();
    });

    afterEach(()=>{
        db.query("delete from userInfo where id = ?",id)
    });

});