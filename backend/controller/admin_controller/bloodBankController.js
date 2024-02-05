const BloodBanks = require("../../model/bloodBankModel.js");

const addBloodBanks = async (req, res) => {
  const {
    bName,
    bAddress,
    bContact,
    oHours,
    bgavailable,
    socialLinks,
    latitude,
    longitude,
  } = req.body;

  if (
    !bName ||
    !bAddress ||
    !bContact ||
    !oHours ||
    !bgavailable ||
    !socialLinks ||
    !latitude ||
    !longitude
  ) {
    return res.json({
      success: false,
      message: "Please Enter all fields ",
    });
  }

  try {
    const newBloodBank = new BloodBanks({
      bbName: bName,
      bbAddress: bAddress,
      bbContact: bContact,
      operatingHours: oHours,
      availableBloodGroups: bgavailable,
      socialMediaLinks: socialLinks,
      latitude: latitude,
      longitude: longitude,
    });

    await newBloodBank.save();
    res.status(200).json({
      success: true,
      message: "BloodBank has been added",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllBloodBanks = async (req, res) => {
  try {
    const {
      bbAddressSearch = "",
      bloodGroupsSearch = "",
      bloodbankSearch = "",
    } = req.query;
    const sortBy = req.query.sortBy || "createdAt";
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;

    // Reset search values to empty strings if they are "All"
    const normalizedBbAddressSearch =
      bbAddressSearch.toLowerCase() === "all" ? "" : bbAddressSearch;
    const normalizedBloodGroupsSearch =
      bloodGroupsSearch.toLowerCase() === "all" ? "" : bloodGroupsSearch;
    const normalizedBloodbankSearch =
      bloodbankSearch.toLowerCase() === "all" ? "" : bloodbankSearch;
    console.log("Sorting Params:", sortBy, sortOrder);

    const query = {};

    if (normalizedBbAddressSearch) {
      query.bbAddress = {
        $regex: new RegExp(`^${normalizedBbAddressSearch}`, "i"),
      };
    }

    if (normalizedBloodGroupsSearch) {
      query.availableBloodGroups = {
        $regex: new RegExp(`${normalizedBloodGroupsSearch}`, "i"),
      };
    }

    if (normalizedBloodbankSearch) {
      query.bbName = {
        $regex: new RegExp(`^${normalizedBloodbankSearch}`, "i"),
      };
    }

    const bloodBankList = await BloodBanks.find(query).sort({
      [sortBy]: sortOrder,
    });

    console.log("BloodBanks List:", bloodBankList);

    res.json({
      success: true,
      bloodBanks: bloodBankList,
    });
  } catch (error) {
    res.json(error);
  }
};

const updateBloodBank = async (req, res) => {
  const {
    bName,
    bAddress,
    bContact,
    oHours,
    bgavailable,
    socialLinks,
    latitude,
    longitude,
  } = req.body;

  const id = req.params.id;

  // validation
  if (
    !bName ||
    !bAddress ||
    !bContact ||
    !oHours ||
    !bgavailable ||
    !socialLinks ||
    !latitude ||
    !longitude
  ) {
    return res.json({
      success: false,
      message: "Cannot be empty",
    });
  }

  try {
    const updatedBloodBanks = {
      bName: bName,
      bAddress: bAddress,
      bContact: bContact,
      oHours: oHours,
      bgavailable: bgavailable,
      socialLinks: socialLinks,
      latitude: latitude,
      longitude: longitude,
    };
    await BloodBanks.findByIdAndUpdate(id, updatedBloodBanks);
    res.status(200).json({
      success: true,
      message: "Hospital Updated Successfully",
      bloodbanks: updatedBloodBanks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const deleteBloodBank = async (req, res) => {
  try {
    const deletedBloodBank = await BloodBanks.findByIdAndDelete(req.params.id);
    if (!deletedBloodBank) {
      return res.json({
        success: false,
        message: "BloodBank Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "BloodBank Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const bloodBankPagination = async (req, res) => {
  const requestedPage = request.query.page;

  const resultPerPage = 6;

  try {
    const bRequests = await BloodBanks.find({})
      .skip((requestedPage - 1) * resultPerPage)
      .limit(resultPerPage);

    // if there is no bloodbanks
    if (bRequests.length == 0) {
      return res.json({
        success: false,
        message: "No Blood Requests Right Now",
      });
    }

    res.json({
      success: true,
      bloodbanks: bloodbanks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "error",
    });
  }
};

const searchBloodbanks = async (req, res, next) => {
  try {
    const { q } = req.query;
    const bloodbanks = await Product.find({
      name: { $regex: q, $options: "i" },
    });

    if (bloodbanks.length < 1)
      throw new ErrorHandler(404, "No BloodBanks found");

    res.status(201).json({
      status: "success",
      message: "Found",
      bloodbanks,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBloodBanks,
  addBloodBanks,
  updateBloodBank,
  deleteBloodBank,
  bloodBankPagination,
  searchBloodbanks,
};
