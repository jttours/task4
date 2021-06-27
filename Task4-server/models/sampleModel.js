let mongoose = require('mongoose');



// Employee Schema
const SampleModel = mongoose.model('SampleModel', {
    name: {
        type: String,
        required:true
    }, 
    email: {
        type:String,
        required:true
    },
    salary: {
        type:String,
        required:true
    }
});



module.exports = {SampleModel};