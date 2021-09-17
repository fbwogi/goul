const mongoose = require ('mongoose')
const PSchema = new mongoose.Schema({
    pname: {type: String, required: true},
	psku: {type: String, required: true},
	pURL: {type: String, required: true },
	pKeywords: {type: String, required: true},







}, {timestamps: true});






module.exports = mongoose.model('product', PSchema)
