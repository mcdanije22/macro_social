const express = require('express');
const router = express.Router();
const Post = require('../modals/Post');

router.get('/', (req,res)=>{
    res.send('these are post')
})

module.exports = router;