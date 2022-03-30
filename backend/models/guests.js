var mongoose = require('mongoose')

const guestsSchema = mongoose.Schema({
    token: String,
    // profileId: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'profiles'
    // },
    firstName: String,
    lastName: String,
    email: String,
    // messagesId: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'messages'
    // }
});

const guestModel = mongoose.model('guests', guestsSchema)

module.exports = guestModel