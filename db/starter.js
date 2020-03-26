require('dotenv').config();
const mongoose = require('mongoose');
const {mongooseConfig} = require('./mongooseConfig')

const uris = process.env.DB_CONECTION_STRING;

const startDb = () => {
    return new Promise((resolve, reject)  => {
        mongoose.connect(uris, mongooseConfig);
        mongoose.connection.on('error', err => reject(err))
        mongoose.connection.on('disconnect', () => reject('DB disconnect'));
        mongoose.connection.once('open', resolve());
    })
}

module.exports = startDb();
