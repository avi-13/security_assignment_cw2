const Request = require("../../model/RequestBloodModel");

const addRequests = async (req, res) => {
  const {
    userId,
    patientName,
    patientAge,
    patientBloodType,
    components,
    phoneNumber,
    hospitalName,
    hospitalAddress,
    quantity,
    urgency,
    reason,
    date,
    instruction,
    anyPrecautions,
    contactPerson,
  } = req.body;

  console.log(req.body);

  if (
    !userId ||
    !patientName ||
    !patientBloodType ||
    !phoneNumber ||
    !hospitalName ||
    !hospitalAddress ||
    !quantity ||
    !urgency ||
    !date ||
    !contactPerson
  ) {
    return res.json({
      success: false,
      message: "Please Enter all fields ",
    });
  }

  try {
    const newRequest = new Request({
      patientName: patientName,
      patientAge: patientAge,
      patientBloodType: patientBloodType,
      components: components,
      phoneNumber: phoneNumber,
      hospitalName: hospitalName,
      hospitalAddress: hospitalAddress,
      quantity: quantity,
      urgency: urgency,
      reason: reason,
      date: date,
      instruction: instruction,
      anyPrecautions: anyPrecautions,
      contactPerson: contactPerson,
      userId : userId
    });
    await newRequest.save();
    console.log(newRequest);
    res.status(200).json({
      success: true,
      message: "Your Request has been added",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const getAllRequest = async (req, res) => {
  try {
    const requestList = await Request.find().sort({ createdAt: -1 });

    const categorizedData = {
      critical: [],
      urgent: [],
      normal: [],
    };

    requestList.forEach((request) => {
      switch (request.urgency) {
        case "Critical":
          if (categorizedData.critical.length < 5) {
            categorizedData.critical.push(request);
          }
          break;
        case "Urgent":
          if (categorizedData.urgent.length < 5) {
            categorizedData.urgent.push(request);
          }
          break;
        case "Normal":
          if (categorizedData.normal.length < 5) {
            categorizedData.normal.push(request);
          }
          break;
      }
    });

    res.json({
      success: true,
      categorizedData: categorizedData,
    });

    console.log(categorizedData);
  } catch (error) {
    res.json(error);
  }
};

const updateRequest = async (req, res) => {
  const {
    patientName,
    patientAge,
    patientBloodType,
    components,
    phoneNumber,
    hospitalName,
    hospitalAddress,
    quantity,
    urgency,
    reason,
    date,
    instruction,
    anyPrecautions,
    contactPerson,
  } = req.body;

  const id = req.params.id;

  // validation
  if (
    !patientName ||
    !patientBloodType ||
    !phoneNumber ||
    !hospitalName ||
    !hospitalAddress ||
    !quantity ||
    !urgency ||
    !date ||
    !contactPerson
  ) {
    return res.json({
      success: false,
      message: "Cannot be empty",
    });
  }

  try {
    const updatedRequest = {
      patientName: patientName,
      patientAge: patientAge,
      patientBloodType: patientBloodType,
      components: components,
      phoneNumber: phoneNumber,
      hospitalName: hospitalName,
      hospitalAddress: hospitalAddress,
      quantity: quantity,
      urgency: urgency,
      reason: reason,
      date: date,
      instruction: instruction,
      anyPrecautions: anyPrecautions,
      contactPerson: contactPerson,
    };
    await Request.findByIdAndUpdate(id, updatedRequest);
    res.json({
      success: true,
      message: "Request Updated Successfully",
      requestblood: updatedRequest,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const deleteRequest = async (req, res) => {
  try {
    const deletedRequest = await Request.findByIdAndDelete(req.params.id);
    if (!deletedRequest) {
      return res.json({
        success: false,
        message: "Request Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Request Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
const getSingleRequest = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.json({
      success: false,
      message: "",
    });
  }
  try {
    const singleRequest = await Request.findById(id);
    res.status(200).json({
      success: true,
      message: "",
      requestblood: singleRequest,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  addRequests,
  getAllRequest,
  updateRequest,
  deleteRequest,
  getSingleRequest,
};
