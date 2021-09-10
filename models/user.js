// CREATE SIMPLE MONGOOSE USER SCHEMA AND MODEL 
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.plugin(passportLocalMongoose); //  PLUG IN into MONGOOSE via specific Schema

module.exports = mongoose.model('User', userSchema);