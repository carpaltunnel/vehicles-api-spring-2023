let vehiclesData = [
  {id: "a41abaa6-d1e9-4ecb-9d50-e2e55f4d569d", "make":"Chevrolet","model":"Corvette","year":2016,"vin":"17281243-adf2-43ee-894d-fbc5fefaf056"},
  {id: "407c100c-d408-4da5-ac4f-057b5b775505", "make":"Chevrolet","model":"Malibu","year":2009,"vin":"caaae68d-8f29-4682-bbca-cac44c637b16"},
  {id: "a9f2660a-9584-49f6-a250-5e74841d0e11", "make":"Ford","model":"Bronco","year":2020,"vin":"45fdfbb9-9ab3-4205-94ca-f79ea9d99156"},
  {id: "45ccf5c6-0ba9-43be-9cba-07b8897e6fd8", "make":"Honda","model":"Accord","year":2001,"vin":"6ab18c86-7591-4848-a07c-83a30d927668"},
  {id: "29bdb63a-6633-45a4-9e10-1bd060c09827", "make":"Chevrolet","model":"Malibu","year":1997,"vin":"d305706d-386a-4f25-96dc-95ea604d521e"},
];

const db = require('../lib/database');
const Constants = require('../lib/constants');

class VehiclesModel {
  static getVehicles = () => {
    console.log('\t\tVehiclesModel.getVehicles');

    // TODO: Make this better
    return db.getDb().collection(Constants.COLLECTIONS.VEHICLES).find({})
      .project({ _id: 0 }).toArray();
  };

  static getVehicle = (id) => {
    console.log(`\t\tVehiclesModel.getVehicle :: ${id}`);

    return db.getDb().collection(Constants.COLLECTIONS.VEHICLES)
      .findOne({ id }, {
        projection: { _id: 0 }
      });
  };

  static createVehicle = async (vehicle) => {
    console.log('\t\tVehiclesModel.createVehicle');

    await db.getDb().collection(Constants.COLLECTIONS.VEHICLES)
      .insertOne(vehicle);

    delete vehicle._id;
    return vehicle;
  };

  static deleteVehicle = async (id) => {
    console.log('\t\tVehiclesModel.deleteVehicle');

    const deleteResult = await db.getDb().collection(Constants.COLLECTIONS.VEHICLES)
      .deleteOne({ id });

    if (deleteResult.deletedCount === 0) {
      return false;
    }

    return true;
  };

  static replaceVehicle = async (id, vehicle) => {
    console.log('\t\tVehiclesModel.replaceVehicle');
    
    const result = await db.getDb().collection(Constants.COLLECTIONS.VEHICLES)
      .replaceOne({ id }, vehicle);

    if (result.matchedCount === 1) {
      return vehicle;
    }

    return false;
  };

  static updateVehicle = async (id, vehicle) => {
    console.log('\t\tVehiclesModel.updateVehicle');

    const update = {};

    Object.keys(vehicle).forEach((key) => {
      if (key === 'id') {
        return;
      }
     update[key] = vehicle[key];
    });

    const updateResults = await db.getDb().collection(Constants.COLLECTIONS.VEHICLES)
      .findOneAndUpdate({ id }, { $set: update }, { returnDocument: 'after' });
    
      if (updateResults.value) {
        delete updateResults.value._id;
        return updateResults.value;
      }
  
      return false;
  };
}

module.exports = VehiclesModel;