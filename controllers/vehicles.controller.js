const VehiclesCoordinator = require('../coordinators/vehicles.coordinator');

const getVehicles = async (req, res, next) => {
  console.log('vehiclesController.getVehicles');

  const result = VehiclesCoordinator.getVehicles();
  res.status(200).json(result);
};

const getVehicle = async (req, res, next) => {
  console.log('vehiclesController.getVehicle');
  const foundVehicle = VehiclesCoordinator.getVehicle(req.params.id);
  
  if (foundVehicle) {
    res.status(200).json(foundVehicle);
  } else {
    res.status(404).json();
  }
};

const createVehicle = async (req, res, next) => {
  console.log('vehiclesController.createVehicle');

  const result = VehiclesCoordinator.createVehicle(req.body);
  res.status(200).json(result);
};

const deleteVehicle = async (req, res, next) => {
  console.log('vehiclesController.deleteVehicle');
  
  const deleteResult = VehiclesCoordinator.deleteVehicle(req.params.id);

  if (deleteResult) {
    res.status(204).json(deleteResult);
  } else {
    res.status(404).json();
  }
};

module.exports = {
  getVehicles,
  getVehicle,
  createVehicle,
  deleteVehicle,
};