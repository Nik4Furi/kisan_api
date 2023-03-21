const mongoose = require('mongoose');

//--------Creating the schema to store the users----------X
const UsersSchema = mongoose.Schema({
    name: { type: String, require: true, minlength: [5, 'Name must be 5 char long'], maxlength: [15, 'Name must not be 15 char long']},

    email: { type: String,require:false, minlength: [5, 'Email must be 7 char long'], maxlength: [22, 'Email must not be 22 char long'],default:"users"},

    phone: { type: Number, require: true, minlength: [10, 'Phone must be 10 char long'], maxlength: [12, 'Phone must not be 12 char long']},

    password: { type: String, minlength: [8, 'Password must be 8 char long'] },

    role: { type: String, require :true, minlength: [5, 'Role must be 5 char long'], maxlength: [15, 'Role must not be 15 char long'], default: 'User' },

    address: { type: String, minlength: [5, 'Address must be 5 char long'], maxlength: [35, 'Address must not be 15 char long'] },

    status: { type: Boolean, default: false },

    tag : {type:String, default:'user'}
}, { timestamps: true })

const UsersModal = new mongoose.model('User', UsersSchema);

module.exports = UsersModal;