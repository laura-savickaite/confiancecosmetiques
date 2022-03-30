var mongoose = require('mongoose')

const modifiedAtSchema = mongoose.Schema({
    hostId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'host'
    },
    modifiedAt: Date
});

const modifiedAtModel = mongoose.model('modifiedAt', modifiedAtSchema)

module.exports = modifiedAtModel