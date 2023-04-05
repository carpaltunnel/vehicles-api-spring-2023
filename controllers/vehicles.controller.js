const getVehicles = async (req, res, next) => {
  console.log('vehiclesController : getVehicles');
  res.sendStatus(200);
};

module.exports = {
  getVehicles,
};