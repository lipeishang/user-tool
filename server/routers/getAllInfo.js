/**
 * Created by lipeishang on 17-7-31.
 */
let express = require('express');
let router = express.Router();

let db = require('../tools/connection');
let userHandle = require('../tools/userOpration');

router.get('/getAllInfo', (req, res) => {
    db.query(userHandle.queryAll, function (err, result) {
        if (err) return err;
        res.send(result);
    });
});

module.exports = router;