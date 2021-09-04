// CREATE MONGOOSE SCHEMA 

const mongoose = require('mongoose'); // import mongoose
const Schema = mongoose.Schema; 

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


>>>>>>> cc6d6c6 (Express REST API with MongoDB and Mongoose Part 1)
>>>>>>> 3d267ee (Express REST API with MongoDB and Mongoose Part 1)
const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps:  true
});


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
    },
<<<<<<< HEAD
    comments: [commentSchema] //sub documents
=======
<<<<<<< HEAD
    comments: [commentSchema] //sub documents
=======
    image: {
        type: String,
        required: true
    },
    elevation: {
        type: Number,
        required: true
    },
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    comments: [commentSchema]
>>>>>>> cc6d6c6 (Express REST API with MongoDB and Mongoose Part 1)
>>>>>>> 3d267ee (Express REST API with MongoDB and Mongoose Part 1)
}, {
    timestamps: true
});

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;