var mongoose = require("mongoose")
var mymodel = mongoose.model( new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }

}, { strict: false }), myschema);

module.exports = mymodel;
