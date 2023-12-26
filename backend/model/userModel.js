const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  currentAddress: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
