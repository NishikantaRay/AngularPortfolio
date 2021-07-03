const mongoose = require("mongoose");

const authData = mongoose.Schema({
    email : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("info",authData);