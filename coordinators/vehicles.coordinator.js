const { v4: uuidv4 } = require('uuid');
const VehiclesModel = require('../models/vehicles.model');

class VehiclesCoordinator {

  static getVehicles = () => {
    console.log('\t VehiclesCoordinator.getVehicles');
    return VehiclesModel.getVehicles();
  };

  static getVehicle = (id) => {
    console.log(`\t VehiclesCoordinator.getVehicle :: ${id}`);
    return VehiclesModel.getVehicle(id);
  };

  static createVehicle = (vehicle) => {
    console.log('\t VehiclesCoordinator.createVehicle');
    vehicle.id = uuidv4();
    return VehiclesModel.createVehicle(vehicle);
  };

  static deleteVehicle = (id) => {
    console.log('\t VehiclesCoordinator.deleteVehicle');
    return VehiclesModel.deleteVehicle(id);
  };
}

module.exports = VehiclesCoordinator;