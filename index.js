const express = require('express');
const bodyParser = require('body-parser');
const vehiclesRouter = require('./routes/vehicles.routes');
const paintMiddleware = require('./middleware/supportedPaint');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const db = require('./lib/database');

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

const dbConfig = {
  hostname: '127.0.0.1',
  port: 27017,
  database: 'arca',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 3,
  }
};

db.configure(dbConfig);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});