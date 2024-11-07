const express = require('express');
const router = express.Router();

const routesAuth = require('./authRoutes');
const routesConl = require('./collectionsRoute');
const routesMat = require('./materialRoute');

router.use('/api/auth', routesAuth);
router.use('/api/collections', routesConl);
router.use('/api/material', routesMat);

module.exports = router;