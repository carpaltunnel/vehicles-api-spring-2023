const VehiclesModel = require('../models/vehicles.model');

class VehiclesCoordinator {
  static getVehicles = () => {
    console.log('\t VehiclesCoordinator.getVehicles');
    return VehiclesModel.getVehicles();
  };
}

module.exports = VehiclesCoordinator;