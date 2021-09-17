const mongoose = require ('mongoose')
const SSchema = new mongoose.Schema({

    wbhkURL: {type: String, required: true},
    sTask: {type: Number, required: true },
    : {type: String, required: true}







}, {timestamps: true});






module.exports = mongoose.model('SETTINGS', SSchema)
