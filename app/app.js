const express = require('express');

const app = express();
const router = express.Router();

const appMiddleware = require('./middleware/appMiddleware');
const apiRouter = require('./api/apiRouter');

exports.start = () => app.listen(process.env.PORT, () => console.log('server OK'))

appMiddleware(app);
apiRouter(app, router);

