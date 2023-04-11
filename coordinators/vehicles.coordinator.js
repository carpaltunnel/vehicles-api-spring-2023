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

  static replaceVehicle = (id, vehicle) => {
    console.log('\t VehiclesCoordinator.replaceVehicle');
    vehicle.id = id;
    // TODO: Don't allow users to change VINs
    return VehiclesModel.replaceVehicle(id, vehicle);
  };

  static updateVehicle = (id, vehicle) => {
    console.log('\t VehiclesCoordinator.updateVehicle');
    vehicle.id = id;
    // TODO: Don't allow users to change VINs
    return VehiclesModel.updateVehicle(id, vehicle);
  };
}

module.exports = VehiclesCoordinator;