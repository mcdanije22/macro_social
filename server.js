const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

  
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, ()=> console.log(`server started successfully on ${PORT}`))