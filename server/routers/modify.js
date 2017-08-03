/**
 * Created by lipeishang on 17-7-31.
 */
let express = require('express');
let router = express.Router();

let db = require('../tools/connection');

let userHandle = require('../tools/userOpration');

router.post('/modifyUser', (req, res) => {
    db.query(userHandle.update, [req.body.newUserName, req.body.newName, req.body.newAge, req.body.newSex, req.body.newPhonenumber, req.body.newEmail, req.body.newRemark, req.body.newPhonenumber], function (err, result) {
        if (err) return err;
        res.send(result);
    });
});

module.exports = router;