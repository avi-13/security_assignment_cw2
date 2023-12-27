const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: false,
    default :"main"
  },
  email: {
    type: String,
    required: false,
    default :"main"
  },
  number: {
    type: Number,
    required: false,
    defalut: 9848745789,
  },
  currentAddress: {
    type: String,
    required: false,
    default :"main"
  },
  password: {
    type: String,
    required: false,
    default :"main"
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
