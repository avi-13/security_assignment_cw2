const mongoose = require("mongoose");

const BloodBankSchema = mongoose.Schema({
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
    type: String,
  },

  operatingHours: {
    required: true,
    type: String,
  },

  availableBloodGroups: {
    required: false,
    type: String,
  },
  socialMediaLinks: {
    required: false,
    type: String,
  },
  location: {
    latitude: {
      required: true,
      type: String,
    },

    longitude: {
      required: true,
      type: String,
    },
  },
});

const BloodBanks = mongoose.Schema('bloodbanks', BloodBankSchema);
module.exports = BloodBanks ;