const Hospital = require("../../model/hospital/hospitalModel.js");

const addHospitals = async (req, res) => {
  const {
    hospitalName,
    hospitalAddress,
    hospitalContactNumber,
    hospitalType,
    hospitalServices,
  } = req.body;

  if (
    !hospitalName ||
    !hospitalAddress ||
    !hospitalContactNumber ||
    !hospitalType ||
    !hospitalServices
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
    const hospitalList = await Hospital.find();
    res.json({
      success: true,
      hospital: hospitalList,
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
  } = req.body;

  const id = req.params.id;

  // validation
  if (
    !hospitalName ||
    !hospitalAddress ||
    !hospitalContactNumber ||
    !hospitalType ||
    !hospitalServices
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
