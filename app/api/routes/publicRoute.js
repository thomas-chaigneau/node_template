const router = require('express').Router();

const {
    getPublicRouteInfo,
} = require('../controllers/publicRouteController');


router
    .route('/')
    .get(getPublicRouteInfo)

module.exports = router;