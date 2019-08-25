const express = require('express');
const router = express.Router();
const Post = require('../modals/Post');

router.post('/', (req,res)=>{
    const test = new Post({
        user:'Josh'
    })
    test.save().then(item=>res.json(item))
    // res.send('these are post')
})

module.exports = router;