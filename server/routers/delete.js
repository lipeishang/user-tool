/**
 * Created by lipeishang on 17-7-31.
 */
let express = require('express');
let router = express.Router();

let db = require('../tools/connection');

let userHandle = require('../tools/userOpration');

router.post('/deleteUser', (req, res) => {
    console.log(req.body);
    db.query(userHandle.delete, req.body.phonenumber, function (err) {
        if (err) return err;
        res.send("succeed");
    });
});

module.exports = router;