/**
 * Created by lipeishang on 17-7-31.
 */
let express = require('express');
let router = express.Router();

let db = require('../tools/connection');
let userHandle = require('../tools/userOpration');

router.get('/searchUser/:phonenumber', (req, res) => {
    const phonenumber = req.params.phonenumber;
    db.query(userHandle.queryByPhonenumber, phonenumber, function (err, result) {
        if (err) return err;
        res.send(result);
    });
});

module.exports = router;