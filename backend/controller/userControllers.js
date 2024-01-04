const User = require("../model/user/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  console.log(req.body);

  const { fullName, email, number, password, currentAddress } = req.body;

  // validation for all the fields
  if ((!fullName && !email, !number && !password && !currentAddress)) {
    return res.json({
      success: false,
      message: "Please fill all the details",
    });
  }
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.json({
        success: false,
        message: "User Already Exists",
      });
    }

    const generateSalt = await bcrypt.genSalt(10);
    const passwordEncrypted = await bcrypt.hash(password, generateSalt);

    const newUser = new User({
      fullName: fullName,
      email: email,
      number: number,
      currentAddress: currentAddress,
      password: passwordEncrypted,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Your account has been created",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json("Server Error!! \n Please Try Again");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Please Enter all the fields",
    });
  }

  try {
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      return res.json({
        success: false,
        message: "User Doesnot Exists",
      });
    }

    const passwordToCompare = findUser.password;

    const isMatched = await bcrypt.compare(password, passwordToCompare);

    if (!isMatched) {
      return res.json({
        success: false,
        message: "Wrong Password",
      });
    }

    const token = jwt.sign(
      { id: findUser._id, isAdmin: findUser.isAdmin },
      process.env.JWT_TOKEN_SECRET
    );

    res.status(200).json({
      success: true,
      token: token,
      userData: findUser,
      message: "User Logged In successfully",
    });
  } catch (error) {
    res.json("Server Error \n Please try again");
  }
};

const beAdonor = async (req, res) => {
  const { gender, dob, bloodGroup, noPreviousDonation, emergencyNumber } =
    req.body;

  const userId = req.params.id;

  if (
    !gender ||
    !dob ||
    !bloodGroup ||
    !noPreviousDonation ||
    !emergencyNumber
  ) {
    res.status(400).json({
      success: false,
      message: "Please Enter all the fields",
    });
  }

  try {
    const updatedDonor = {
      gender: gender,
      dob: dob,
      bloodGroup: bloodGroup,
      noPreviousDonation: noPreviousDonation,
      emergencyNumber: emergencyNumber,
    };
    await User.findByIdAndUpdate(userId, updatedDonor);

    res.status(200).json({
      success: true,
      message: "You have been register as a donor",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

//  fetching all the users
const getAllUsers = async (req, res) => {
  try {
    const userList = await User.find();
    res.json({
      success: true,
      users: userList,
    });
  } catch (error) {
    res.json(error);
  }
};

const getSingleUser = async (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.json({
      success: false,
      message: "",
    });
  }
  try {
    const singleUser = await User.findById(userId);
    res.json({
      success: true,
      message: "",
      user: singleUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  createUser,
  loginUser,
  beAdonor,
  getAllUsers,
  getSingleUser,
};
