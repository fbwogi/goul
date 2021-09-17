const mongoose = require ('mongoose')


const USchema = new mongoose.Schema({
	swkey: {type: String, required: true},
	userid: {type: String, required: true },
    email: {type: String, required: true },
	pwd: {type: String, required: true },







}, {timestamps: true});






module.exports = mongoose.model('users', USchema)
