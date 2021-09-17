const Product = require('../models/prodel')
const shoe = new Product()
getProductSKU = (req, res) => {
    const params = req.params
    
    if (!params) {
        return res.status(400).json({
            success: false,
            error: 'Enter SKU'
        })
    }
    Product.findOne({ _id: params.id}, (err, user) => {
        if (err) {
            return res.status(404).json({err, message: 'Wrong SKU number',})
        }
        user
            .save
            .then(() => {
                return res.status(200).json({
                    success: true,
                    pname: user._pname,
                    psku: user._psku,
                    message: 'product sku added',
                })
            })
        .catch(error => {
            return res.status(404).json({
                error,
                message: 'product sku not added',
                
            })
        })
        
    })
    
}

getProductURL = (req, res) => {
    const params = req.params
    
    if (!params) {
        return res.status(400).json({
            success: false,
            error: 'Enter URL'
        })
    }
    Product.findOne({ _id: params.id}, (err, user) => {
        if (err) {
            return res.status(404).json({err, message: 'Invalid URL',})
        }
        user
            .save
            .then(() => {
                return res.status(200).json({
                    success: true,
                    pURL: user._pURL,
                    message: 'product URL added',
                })
            })
        .catch(error => {
            return res.status(404).json({
                error,
                message: 'product URL not added',
                
            })
        })
        
    })
}

getProductKeyword = (req, res) => {
    const params = req.params
    
    if (!params) {
        return res.status(400).json({
            success: false,
            error: 'Enter SKU'
        })
    }
    Product.findOne({ _id: params.id}, (err, user) => {
        if (err) {
            return res.status(404).json({err, message: 'Wrong SKU number',})
        }
        user
            .save
            .then(() => {
                return res.status(200).json({
                    success: true,
                    pname: user._pname,
                    psku: user._psku,
                    message: 'product sku added',
                })
            })
        .catch(error => {
            return res.status(404).json({
                error,
                message: 'product sku not added',
                
            })
        })
        
    })
}

module.exports = {
    getProductSKU,
    getProductURL,
    getProductKeyword,
}
