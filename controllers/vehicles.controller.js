const VehiclesCoordinator = require('../coordinators/vehicles.coordinator');

const getVehicles = async (req, res, next) => {
  console.log('vehiclesController.getVehicles');

  const result = VehiclesCoordinator.getVehicles();
  res.status(200).json(result);
};

module.exports = {
  getVehicles,
};