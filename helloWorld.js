require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// * https://github.com/express-rate-limit/express-rate-limit/wiki/Troubleshooting-Proxy-Issues
app.set('trust proxy', 1)
app.use(cors());
app.use(express.json({limit: '50mb'}));

let port = 3002;

const server = app.listen(port, ()=> console.log(`Server started on port ${port}`));

app.get('/test', async (request, response)=> {
  randNum = Math.random();
  urlJSON = {test: "testing Reclaim", rand: randNum};
  response.json(urlJSON);
  console.log(`Received request from ${request.headers['x-forwarded-for']}. Sent ${randNum}.`)
});
