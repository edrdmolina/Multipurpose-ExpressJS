const mongoose = require('mongoose');
const { Schema } = mongoose;

const VisitSchema = new Schema({
    ipAddress: {
        type: String,
        required: true,
        unique: true,
    },
    visitCount: {
        type: Number,
        required: true,
        default: 0,
    },
    software: {
        type: String,
        required: true,
    },
    lastVisit: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Visit', VisitSchema);