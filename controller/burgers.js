// Models
const mongoose = require('mongoose');
// const Admin = mongoose.model('Admin');


module.exports = {
    async registerAdmin(req,res,next) {
        console.log('PINGED>> /api/burgers/register-admin')
        const { body } = req
        res.status(200).json({ body })
    }
}