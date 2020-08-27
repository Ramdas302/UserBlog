const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        required: true
    },
    blog_title:{type:String,
        required: true
    },
    image_url:{type:String,
        required: true
    }
    
});



module.exports = mongoose.model('Blog', blogSchema);
