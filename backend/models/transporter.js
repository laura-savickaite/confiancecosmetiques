var mongoose = require('mongoose')

const transportersSchema = mongoose.Schema({
    hostId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'host'
    },
    service: String,
    user: String,
    pass: String
});

const transporterModel = mongoose.model('transporter', transportersSchema)

module.exports = transporterModel