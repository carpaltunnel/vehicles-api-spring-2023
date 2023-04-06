const vehiclesData = [
  {"make":"Chevrolet","model":"Corvette","year":2016,"vin":"17281243-adf2-43ee-894d-fbc5fefaf056"},
  {"make":"Chevrolet","model":"Malibu","year":2009,"vin":"caaae68d-8f29-4682-bbca-cac44c637b16"},
  {"make":"Ford","model":"Bronco","year":2020,"vin":"45fdfbb9-9ab3-4205-94ca-f79ea9d99156"},
  {"make":"Honda","model":"Accord","year":2001,"vin":"6ab18c86-7591-4848-a07c-83a30d927668"},
  {"make":"Chevrolet","model":"Malibu","year":1997,"vin":"d305706d-386a-4f25-96dc-95ea604d521e"},
];

class VehiclesModel {
  static getVehicles = () => {
    console.log('\t\tVehiclesModel.getVehicles');
    return vehiclesData;
  };
}

module.exports = VehiclesModel;