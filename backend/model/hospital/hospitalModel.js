const mongoose = require("mongoose");

const hospitalSchema = mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
  },

  hospitalAddress: {
    type: String,
    required: true,
  },

  hospitalContactNumber: {
    type: Number,
    required: true,
  },

  hospitalType: {
    type: String,
    required: true,
  },

  hospitalServices: {
    type: String,
    required: true,
  },
});

const Hospital = mongoose.model("hospital", hospitalSchema);
module.exports = Hospital;
