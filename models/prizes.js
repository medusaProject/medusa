var mongoose = require('mongoose');

// We create a prize schema
var prizeSchema = new mongoose.Schema({
    title : String,
    description : String,
    prize : Number
});

// We export the new schema
module.exports = mongoose.model('prizes', prizeSchema);