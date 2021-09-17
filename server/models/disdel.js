const mongoose = require ('mongoose')

const DiSchema = new mongoose.DiSchema({
    email: {type: String, required: true },
    did: {type: String, required: true},
    pwd: {type: String, required: true },
}, {timestamps: true});
module.exports = mongoose.model('discord', DiSchema)

