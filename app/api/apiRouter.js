const privateRoute = require('./routes/privateRoute');
const publicRoute = require('./routes/publicRoute');

const apiRouter = (app, router) => {
    router.use('/publicRoute', publicRoute)
    router.use('/privateRoute', privateRoute)
    
    app.use('/api', router);
};

module.exports = apiRouter;