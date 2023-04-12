const express = require('express');
const bodyParser = require('body-parser');
const vehiclesRouter = require('./routes/vehicles.routes');
const paintMiddleware = require('./middleware/supportedPaint');
const errorHandlerMiddleware = require('./middleware/errorHandler');

const port = 3000;
const app = express();

app.use(bodyParser.json());
//app.use(paintMiddleware());
app.post('*', paintMiddleware());
app.put('*', paintMiddleware());
app.patch('*', paintMiddleware());

app.use('/api/v1/vehicles', vehiclesRouter);

// Errorhandlers always go last
app.use(errorHandlerMiddleware());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});