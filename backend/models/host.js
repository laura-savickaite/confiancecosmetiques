var mongoose = require('mongoose')

const hostSchema = mongoose.Schema({
    token: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    // transporterId: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'transporter'
    // },
    createdAt: Date,
    // modifiedAtId: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'modifiedAt'
    // },
    // lastConnectionAtId: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'lastConnectionAt'
    // },
});

const hostModel = mongoose.model('host', hostSchema)

module.exports = hostModel