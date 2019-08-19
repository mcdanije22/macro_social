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
    },
    macros:{
        type: Object,
        required: true
    },
    ingredients:{
        type: Object,
        required: true
    },
    directions:{
        type: Object,
        required: true
    },
    recommended:{
        type: Array
    },
    comments:{
        type: Array
    }
});

module.exports = mongoose.model('posts', PostSchema);