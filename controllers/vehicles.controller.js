const VehiclesCoordinator = require('../coordinators/vehicles.coordinator');

const getVehicles = async (req, res, next) => {
  console.log('vehiclesController.getVehicles');

  const result = await VehiclesCoordinator.getVehicles();
  res.status(200).json(result);
};

const getVehicle = async (req, res, next) => {
  console.log('vehiclesController.getVehicle');
  const foundVehicle = await VehiclesCoordinator.getVehicle(req.params.id);
  
  if (foundVehicle) {
    res.status(200).json(foundVehicle);
  } else {
    res.status(404).json();
  }
};

const createVehicle = async (req, res, next) => {
  try {
    console.log('vehiclesController.createVehicle');
    const result = await VehiclesCoordinator.createVehicle(req.body);
    res.status(200).json(result);
  } catch (ex) {
    next(ex);
  }
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

const replaceVehicle = async (req, res, next) => {
  console.log('vehiclesController.replacevehicle');

  const replaceResult = VehiclesCoordinator.replaceVehicle(req.params.id, req.body);
  
  if (replaceResult) {
    res.status(200).json(replaceResult);
  } else {
    res.status(404).json();
  }
};

const updateVehicle = async (req, res, next) => {
  console.log('vehiclesController.updateVehicle');

  const updateResult = VehiclesCoordinator.updateVehicle(req.params.id, req.body);
  
  if (updateResult) {
    res.status(200).json(updateResult);
  } else {
    res.status(404).json();
  }
};

module.exports = {
  getVehicles,
  getVehicle,
  createVehicle,
  deleteVehicle,
  replaceVehicle,
  updateVehicle,
};