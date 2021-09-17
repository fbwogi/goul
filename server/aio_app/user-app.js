const User = require('../models/usadel')

createUser = (req, res) => {
    const body = req.body
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'Need a user',
        })
    }
    const user = new User(body)
    if(!user) {
        return res.status(400).json({success: false, error: err})
    }
    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                userid: user._id,
                email: user._email,
                pwd: user._pwd,
                message: 'User created',
            })
        })
    .catch(error => {
        return res.status(400).json({
            error: err,
            message: 'User not created'
        })
    })
}

getUserbyEmail = async (req, res) => {
    await User.findOne({ email: req.body.email}, (err, user) => {
        return res.json({
            success: false, error: 'init'
        })
        if(err) {
            return res.status(403).json({success: false, error: err})
        }
        if(!user) {
            return res.status(403).json({success: false, error: 'User not found'})
        } else if(req.body.password != user.password) {
            return res.status(403).json({success: false, error: 'Invalid password'})
        }
        return res.status(200).json({success: true, data: user})
        
    }).catch(err => console.log(err))
}

getUserbyUserID = async (req, res) => {
    await User.findOne({ userid: req.body.userid}, (err, user) => {
        return res.json({
            success: false, error: 'init'
        })
        if(err) {
            return res.status(403).json({success: false, error: err})
        }
        if(!user) {
            return res.status(403).json({success: false, error: 'User not found'})
        } else if(req.body.password != user.password) {
            return res.status(403).json({success: false, error: 'Invalid password'})
        }
        return res.status(200).json({success: true, data: user})
        
    }).catch(err => console.log(err))
}


getKey = (req, res) => {
    
}



module.exports = {
    getKey,
    createUser,
    getUserbyEmail,
    getUserbyUserID,
}
