require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const natsWrapper = require('./nats-wrapper');

const Routes = require('./src/routes');
const Database = require('./src/database');

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const healthRoutes = express.Router();

healthRoutes.route('/')
  .get((req, res) => {
    let db = dependencies.database.connected ? "up" : "down";
    res.json({
      status: {
        application: "up",
        database: db
      }
    })
  })

app.use('/', Routes());

new Database(process.env.DATABASE_CONNECTION)
  .then(async () => {
  //  await natsWrapper.connect(process.env.NATS_CLUSTER_ID, process.env.NATS_URL);

    app.use('/health', healthRoutes);
    app.listen(port, () => {
      console.log(`Listening on ${port}. Health Check at http://localhost:${port}/health`);
    });
  });
