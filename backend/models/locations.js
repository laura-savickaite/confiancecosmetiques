var mongoose = require('mongoose')

const locationsSchema = mongoose.Schema({
    guestId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'guest'
    },
    lat: Number,
    lng: Number,
    city: String,
    country: String,
});

const locationModel = mongoose.model('location', locationsSchema)

module.exports = locationModel