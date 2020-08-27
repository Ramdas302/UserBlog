const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB',(err,docs)=>{
    if(!err)
    console.log('mogodb connection successfully');
    else
    console.log('mongodb not connected');
});

module.exports=mongoose;