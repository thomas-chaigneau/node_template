const router = require('express').Router();

const {
    getPrivateRouteInfo,
} = require('../controllers/privateRouteController');


router
    .route('/')
    .get(getPrivateRouteInfo)

module.exports = router;