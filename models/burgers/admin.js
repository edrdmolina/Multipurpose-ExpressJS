// Libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const AdminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    email: { 
        type: String,
        unique: true,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    isEmployee: {
        type: Boolean,
        required: true
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
})

AdminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Admin', AdminSchema);