var mongoose = require('mongoose');

// We create a prize schema
var prizeSchema = new mongoose.Schema({
    units: String,
    title : String,
    description : String,
    prize : Number,
    coin : String,
    country : String
});

// We export the new schema
module.exports = mongoose.model('prizes', prizeSchema);