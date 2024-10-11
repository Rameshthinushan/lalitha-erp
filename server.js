const express = require('express'),
cors = require('cors');
require('dotenv').config()

const app = express();
const routes = require('./api/routes/routes');

app.use(express.json())
app.use(cors());

app.use('/api', routes);

app.listen(
  process.env.PORT, () => {
    console.log(`Listing port ${process.env.PORT}`)
  }
);


