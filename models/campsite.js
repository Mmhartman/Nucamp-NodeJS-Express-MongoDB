// CREATE MONGOOSE SCHEMA 

const mongoose = require('mongoose'); // import mongoose
const Schema = mongoose.Schema; 


// Schema
const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;