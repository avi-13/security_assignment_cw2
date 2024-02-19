const mongoose = require("mongoose");

const bloodBankSchema = mongoose.Schema(
  {
    bbName: {
      required: true,
      type: String,
    },

    bbAddress: {
      required: true,
      type: String,
    },

    bbContact: {
      required: true,
      type: Number,
    },

    operatingHours: {
      required: true,
      type: String,
    },
    serviceOffered: {
      required: true,
      type: String,
    },

    specialInstructions: {
      required: true,
      type: String,
    },

    additionalNotes: {
      required: true,
      type: String,
    },

    availableBloodGroups: {
      required: true,
      type: String,
    },
    socialMediaLinks: {
      required: true,
      type: String,
    },
    latitude: {
      required: true,
      type: Number,
    },
    longitude: {
      required: true,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const BloodBanks = mongoose.model("bloodbanks", bloodBankSchema);
module.exports = BloodBanks;
