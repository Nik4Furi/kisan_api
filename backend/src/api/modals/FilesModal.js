const mongoose = require('mongoose');

const machinarySchema = mongoose.Schema({
    merchant_id: { type:mongoose.Schema.Types.ObjectId,res:"User" },
    
    title: { type: String, required: true, minlength: [10, 'Title must be 10 char long'], maxlength: [25, 'Title must not be 25 char long']},

    description: { type: String, required: true, minlength: [10, 'Description must be 10 char long'], maxlength: [250, 'Description must not be 250 char long']},

    img : { type : String,  required: true },

    uuid : { type : String,  required : true },

    price : { type: String, required: true, minlength: [2, 'Price must be 2 char long'], maxlength: [5, 'Price must not be 5 char long']},

    quantity : { type: String, required: false, minlength: [1, 'Quantity must be 1 char long'], maxlength: [5, 'Quantity must not be 5 char long'],default:"0"},

    status : {type:Boolean, default: false}

})

const machinaryModal = new mongoose.model('Machinary',machinarySchema);

module.exports = machinaryModal;