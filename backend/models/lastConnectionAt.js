var mongoose = require('mongoose')

const lastConnectionAtSchema = mongoose.Schema({
    hostId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'host'
    },
    lastConnectionAt: Date
});

const lastConnectionAtModel = mongoose.model('lastConnectionAt', lastConnectionAtSchema)

module.exports = lastConnectionAtModel