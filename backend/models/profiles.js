var mongoose = require('mongoose')

const profilesSchema = mongoose.Schema({
    status: String,
    profile: String,
});

const profileModel = mongoose.model('profiles', profilesSchema)

module.exports = profileModel