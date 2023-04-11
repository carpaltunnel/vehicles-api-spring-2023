const express = require('express');
const bodyParser = require('body-parser');
const vehiclesRouter = require('./routes/vehicles.routes');
const paintMiddleware = require('./middleware/supportedPaint');

const port = 3000;
const app = express();

app.use(bodyParser.json());
//app.use(paintMiddleware());
app.post('*', paintMiddleware());
app.put('*', paintMiddleware());
app.patch('*', paintMiddleware());

app.use('/api/v1/vehicles', vehiclesRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});