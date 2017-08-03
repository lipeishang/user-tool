/**
 * Created by lipeishang on 17-7-31.
 */
const path = require('path');
const express = require('express');

const app = new express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./server/routers/index'));

app.use(express.static(__dirname + '/public'));

app.use('*', function (req, res) {
    res.sendFile(path.resolve('./public/index.html'));
});

app.listen(3000, () => {
    console.log('server started at http://localhost:3000');
});

module.exports = app;