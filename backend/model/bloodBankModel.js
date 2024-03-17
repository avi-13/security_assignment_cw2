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
      type: [String],
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

    bbImageUrl: {
      type: String,
      required: true,
      trim: true, // cuts space and stores in the db
    },

  },
  {
    timestamps: true,
  }
);

const BloodBanks = mongoose.model("bloodbanks", bloodBankSchema);
module.exports = BloodBanks;
