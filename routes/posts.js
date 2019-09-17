const express = require('express');
const router = express.Router();

// Post Model
const Post = require('../modals/Post');

router.get('/', (req,res)=>{
    Post.find()
    .then(posts => res.json(posts));
})

router.post('/add', (req,res)=>{
    
        const post = new Post({
            user: req.body.user,
            title: req.body.title,
            tags: req.body.tags,
            saves: req.body.saves,
            macros: req.body.macros,
            ingredients: req.body.ingredients, 
            directions: req.body.directions, 
            recommended: req.body.recommended,
            comments: req.body.comments
        });
        post.save()
        .then(() => res.json('post added'))
})

module.exports = router;