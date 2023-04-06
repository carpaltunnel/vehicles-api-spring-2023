const VehiclesCoordinator = require('../coordinators/vehicles.coordinator');

const getVehicles = async (req, res, next) => {
  console.log('vehiclesController.getVehicles');

  const result = VehiclesCoordinator.getVehicles();
  res.status(200).json(result);
};

const createVehicle = async (req, res, next) => {
  console.log('vehiclesController.createVehicle');

  const result = VehiclesCoordinator.createVehicle(req.body);
  res.status(200).json(result);
};

module.exports = {
  getVehicles,
  createVehicle,
};