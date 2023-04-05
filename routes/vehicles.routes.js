const express = require('express');
const vehiclesController = require('../controllers/vehicles.controller');
const router = express.Router();

router.get('/', vehiclesController.getVehicles);

module.exports = router;