const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
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
      type: String,
      required: false,
    },

    userImageURL: {
      type: String,
      required: false,
      default:
        "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq",
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);
module.exports = user;
