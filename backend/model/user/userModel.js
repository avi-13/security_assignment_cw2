const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
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

  isAdmin: {
    type: Boolean,
    default: false,
  },

  isAvailable: {
    type: Boolean,
    default: true,
  },

  // optionals

  gender: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: false,
  },
  bloodGroup: {
    type: String,
    required: false,
  },

  noPreviousDonation: {
    type: String,
    required: false,
  },

  emergencyNumber: {
    type: Number,
    required: false,
  },

  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
