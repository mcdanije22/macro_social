const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://josh:josh123@macrosocial-yeplw.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true },()=>{
    console.log('db connected')
})

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// ROUTES
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);








app.listen(PORT, ()=> console.log(`server started successfully on ${PORT}`))