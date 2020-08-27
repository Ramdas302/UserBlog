const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = Schema({
    username:{
        type: String,
        required: true,
      
    },
    email: {
        type: String,
        minlength: 3,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 3,
        required: true
    },

    dob:{
        type: String,
        required: true
    },

    blogs: [{
        ref: 'Blog',
        type: Schema.Types.ObjectId
    }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
