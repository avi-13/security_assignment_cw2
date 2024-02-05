const Hospital = require("../../model/hospitalModel.js");

const addHospitals = async (req, res) => {
  const {
    hospitalName,
    hospitalAddress,
    hospitalContactNumber,
    hospitalType,
    hospitalServices,
    latitude,
    longitude,
  } = req.body;

  if (
    !hospitalName ||
    !hospitalAddress ||
    !hospitalContactNumber ||
    !hospitalType ||
    !hospitalServices ||
    !latitude ||
    !longitude
  ) {
    return res.json({
      success: false,
      message: "Please Enter all fields ",
    });
  }

  try {
    const newHospital = new Hospital({
      hospitalName: hospitalName,
      hospitalAddress: hospitalAddress,
      hospitalContactNumber: hospitalContactNumber,
      hospitalType: hospitalType,
      hospitalServices: hospitalServices,
      latitude: latitude,
      longitude: longitude,
    });

    await newHospital.save();
    res.status(200).json({
      success: true,
      message: "Hospital has been added",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const getAllHospitals = async (req, res) => {
  try {
    const {
      addressSearch = "",
      bloodGroupsSearch = "",
      hospitalSearch = "",
    } = req.query;
    const sortBy = req.query.sortBy || "createdAt";
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;

    // Reset search values if they are "All"
    const normalizedaddressSearch =
      addressSearch.toLowerCase() === "all" ? "" : addressSearch;
    const normalizedBloodGroupsSearch =
      bloodGroupsSearch.toLowerCase() === "all" ? "" : bloodGroupsSearch;
    const normalizedhospitalSearch =
      hospitalSearch.toLowerCase() === "all" ? "" : hospitalSearch;
    console.log("Sorting Params:", sortBy, sortOrder);

    const query = {};

    if (normalizedaddressSearch) {
      query.hospitalAddress = {
        $regex: new RegExp(`^${normalizedaddressSearch}`, "i"),
      };
    }

    if (normalizedBloodGroupsSearch) {
      query.hospitalServices = {
        $regex: new RegExp(`${normalizedBloodGroupsSearch}`, "i"),
      };
    }

    if (normalizedhospitalSearch) {
      query.hospitalName = {
        $regex: new RegExp(`^${normalizedhospitalSearch}`, "i"),
      };
    }

    const hospitalLists = await Hospital.find(query).sort({
      [sortBy]: sortOrder,
    });

    console.log("Hospital List:", hospitalLists);

    res.json({
      success: true,
      hospital: hospitalLists,
    });
  } catch (error) {
    res.json(error);
  }
};

const updateHospital = async (req, res) => {
  const {
    hospitalName,
    hospitalAddress,
    hospitalContactNumber,
    hospitalType,
    hospitalServices,
    latitude,
    longitude,
  } = req.body;

  const id = req.params.id;

  // validation
  if (
    !hospitalName ||
    !hospitalAddress ||
    !hospitalContactNumber ||
    !hospitalType ||
    !hospitalServices ||
    !latitude ||
    !longitude
  ) {
    return res.json({
      success: false,
      message: "Cannot be empty",
    });
  }

  try {
    const updatedHospital = {
      hospitalName: hospitalName,
      hospitalAddress: hospitalAddress,
      hospitalContactNumber: hospitalContactNumber,
      hospitalType: hospitalType,
      hospitalServices: hospitalServices,
      latitude: latitude,
      longitude: longitude,
    };
    await Hospital.findByIdAndUpdate(id, updatedHospital);
    res.json({
      success: true,
      message: "Hospital Updated Successfully",
      hospital: updatedHospital,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const deleteHospital = async (req, res) => {
  try {
    const deletedHospital = await Hospital.findByIdAndDelete(req.params.id);
    if (!deletedHospital) {
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

module.exports = {
  addHospitals,
  getAllHospitals,
  updateHospital,
  deleteHospital,
};
