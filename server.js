const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

const uris = 'mongodb://192.168.99.100:27017/todoapi';
const options = {
    useNewUrlParser: true
};

mongoose.connect(uris, options);
// require('./src/models/(model)'); uso sem o require-dir
requireDir('./src/models');
app.use('/api', require('./src/routes'));
app.listen(3007);