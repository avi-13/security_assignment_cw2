const BloodBanks = require("../../model/blood_banks/bloodBankModel.js");

const addBloodBanks = async (req, res) => {
  const { bName, bAddress, bContact, oHours, bgavailable, socialLinks } =
    req.body;

  if (
    !bName ||
    !bAddress ||
    !bContact ||
    !oHours ||
    !bgavailable ||
    !socialLinks
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
    const bloodBankList = await BloodBanks.find();
    return res.status(200).json({
      success: true,
      bloodbanks: bloodBankList,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateBloodBank = async (req, res) => {
  const { bName, bAddress, bContact, oHours, bgavailable, socialLinks } =
    req.body;

  const id = req.params.id;

  // validation
  if (
    !bName ||
    !bAddress ||
    !bContact ||
    !oHours ||
    !bgavailable ||
    !socialLinks
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
        message: "Hospital Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Hospital Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const filterBloodBank = async (req, res) => {
  try {
    const { location, bloodType } = req.query;
    const filter = {};
    if (location) filter.location = location;
    if (bloodType) filter.bloodType = bloodType;
    const bloodBanks = await BloodBanks.find(filter);
    res.json({ success: true, bloodBanks: bloodBanks });
  } catch (error) {
    console.error("Error filtering blood banks:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const bloodBankPagination = async (req, res) => {
  const requestedPage = request.query.page;

  const resultPerPage = 6;

  try {
    const bRequests = await BloodBanks.find({})
      .skip((requestedPage - 1) * resultPerPage)
      .limit(resultPerPage);

    // if there is no products
    if (bRequests.length == 0) {
      return res.json({
        success: false,
        message: "No Blood Requests Right Now",
      });
    }

    res.json({
      success: true,
      products: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "error",
    });
  }
};

module.exports = {
  getAllBloodBanks,
  addBloodBanks,
  updateBloodBank,
  deleteBloodBank,
  filterBloodBank,
  bloodBankPagination,
};
