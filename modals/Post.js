const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    user:{
        type: String,
        required: true,
        ref: 'users'
    },
    name:{
        type: String,
        required: true
    },
    tags:{
        type: Array,
        default: []
    },
    saves:{
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('post', PostSchema);