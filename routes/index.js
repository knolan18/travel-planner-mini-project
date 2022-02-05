const router = require('express').Router();
const travellerRoutes = require('./traveller-routes');
const tripRoutes = require('./trip-routes');
const locationRoutes = require('./location-routes');

router.use('/travellers', travellerRoutes);
router.use('/trips', tripRoutes);
router.use('/locations', locationRoutes);

module.exports = router;