const mongoose = require ('mongoose')

const PPSchema = new mongoose.PPSchema({
    email: {type: String, required: true },
    pwd: {type: String, required: true },
    subscription: {type: String, required: true},
}, {timestamps: true});
module.exports = mongoose.model('paypal', PPSchema)
