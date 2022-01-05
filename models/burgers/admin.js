// Libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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

module.exports = mongoose.model('Admin', AdminSchema);