const Settings = require('../models/setdel')

getWebhookURL = async (req, res) => {
    
}

createTasks = (req, res) {
    const body = req.body
    
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must define task',
        })
    }
    
    const task = new Settings(body)
    
    if(!task) {
        return res.status(400).json({
            success: false,

        })
    }
    
    task
        .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            id
        })
    })
}


module.exports = {
    getWebhookURL,
    createTasks,
    autoStopTask,
    stopTaskMode,
    setDataUsageLimit,
}
