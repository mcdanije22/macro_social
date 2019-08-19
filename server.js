const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
  
const app = express();
// const router = express.Router();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://josh:josh123@macrosocial-yeplw.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true },()=>{
    console.log('db connected')
})

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, ()=> console.log(`server started successfully on ${PORT}`))