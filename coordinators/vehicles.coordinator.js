const { v4: uuidv4 } = require('uuid');
const VehiclesModel = require('../models/vehicles.model');

class VehiclesCoordinator {

  static getVehicles = () => {
    console.log('\t VehiclesCoordinator.getVehicles');
    return VehiclesModel.getVehicles();
  };

  static createVehicle = (vehicle) => {
    console.log('\t VehiclesCoordinator.createVehicle');
    vehicle.id = uuidv4();
    return VehiclesModel.createVehicle(vehicle);
  };
}

module.exports = VehiclesCoordinator;