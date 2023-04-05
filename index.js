const express = require('express');
const vehiclesRouter = require('./routes/vehicles.routes');

const port = 3000;
const app = express();

app.use('/api/v1/vehicles', vehiclesRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});