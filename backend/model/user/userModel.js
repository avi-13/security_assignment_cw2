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

  isAdmin: {
    type: Boolean,
    default: false,
  },
  // optionals

  isAvailable: {
    type: Boolean,
    default: true,
  },

  isADonor: {
    type: Boolean,
    default: false,
  },
  gender: {
    type: String,
    required: false,
  },
  dob: {
    type: String,
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
});

const user = mongoose.model("user", userSchema);
module.exports = user;
