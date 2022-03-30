var mongoose = require('mongoose')

const messagesSchema = mongoose.Schema({
    guestId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'guest'
    },
    title: String,
    subject: String,
    messageContent: String,
    sentAt: Date
});

const messageModel = mongoose.model('messages', messagesSchema)

module.exports = messageModel