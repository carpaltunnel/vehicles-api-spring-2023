const express = require('express');
const vehiclesController = require('../controllers/vehicles.controller');
const router = express.Router();

router.get('/', vehiclesController.getVehicles);
router.get('/:id', vehiclesController.getVehicle);
router.post('/', vehiclesController.createVehicle);
router.delete('/:id', vehiclesController.deleteVehicle)

module.exports = router;