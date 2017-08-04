/**
 * Created by lipeishang on 17-7-31.
 */
let express = require('express');
let router = express.Router();

let db = require('../tools/connection');

let userHandle = require('../tools/userOpration');

router.post('/deleteUser', (req, res) => {
    db.query(userHandle.delete, req.body.id, function (err) {
        if (err) return err;
        res.send({"status":true});
    });
});

module.exports = router;