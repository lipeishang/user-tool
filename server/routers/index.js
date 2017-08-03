/**
 * Created by lipeishang on 17-7-31.
 */
const express = require('express');
const router = express.Router();

router.use('/', require('./insert'));
router.use('/', require('./delete'));
router.use('/', require('./modify'));
router.use('/', require('./search'));
router.use('/', require('./getAllInfo'));

module.exports = router;