
require('dotenv').config();
const startDb = require('./db/starter');
const app = require('./app/app')

startDb
    .then(() => app.start())
    .catch((err) => console.error(err))