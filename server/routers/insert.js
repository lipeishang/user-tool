let express = require('express');
let router = express.Router();
let db = require('../tools/connection');
let userHandle = require('../tools/userOpration');

router.post('/insertUser', (req, res) => {
    db.query(userHandle.insert, [req.body.userName, req.body.name, req.body.age, req.body.sex, req.body.phonenumber, req.body.email, req.body.remark], function (err, result) {
        if (err) return err;
        res.send('User added to database with ID: ' + result.insertId);
    });
});

module.exports = router;
