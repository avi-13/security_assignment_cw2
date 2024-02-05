const User = require("../../model/userModel");
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

    return res.status(200).json({
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

    return res.status(200).json({
      success: true,
      token: token,
      userData: findUser,
      message: "Logged In successfully",
    });
  } catch (error) {
    res.json("Server Error \n Please try again");
  }
};

const beAdonor = async (req, res) => {
  const { gender, dob, bloodGroup, noPreviousDonation, emergencyNumber } =
    req.body;
  console.log(gender, dob, bloodGroup, noPreviousDonation, emergencyNumber);

  const id = req.params.id;

  if (
    !gender ||
    !dob ||
    !bloodGroup ||
    !noPreviousDonation ||
    !emergencyNumber
  ) {
    return res.json({
      success: false,
      message: "Please provide all the required fields with valid data types.",
    });
  }

  try {
    // Update donor information
    const updatedDonor = {
      gender: gender,
      dob: dob,
      bloodGroup: bloodGroup,
      noPreviousDonation: noPreviousDonation,
      emergencyNumber: emergencyNumber,
      isADonor: true,
    };
    const updatedUser = await User.findByIdAndUpdate(id, updatedDonor, {
      new: true,
    });

    if (!updatedUser) {
      return res.json({
        success: false,
        message: "User not found or update failed.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "You have been registered as a donor.",
      updatedUser,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error occurred.",
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
  const id = req.params.id;

  if (!id) {
    return res.json({
      success: false,
      message: "",
    });
  }
  try {
    const singleUser = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "",
      user: singleUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    console.log(user.isADonor);

    if (user.isADonor == false) {
      const { fullName, email, number, currentAddress } = req.body;

      if (!fullName || !email || !number || !currentAddress) {
        return res.json({
          success: false,
          message: "Please Enter all the fields",
        });
      }
      const updatedUser = {
        fullName: fullName,
        email: email,
        number: number,
        currentAddress: currentAddress,
      };
      await User.findByIdAndUpdate(id, updatedUser);

      return res.status(200).json({
        success: true,
        message: "You have been register as a donor",
      });
    } else {
      const {
        fullName,
        email,
        number,
        currentAddress,
        gender,
        dob,
        isAvailable,
        bloodGroup,
        noPreviousDonation,
        emergencyNumber,
      } = req.body;
      if (
        !fullName ||
        !email ||
        !number ||
        !currentAddress ||
        !fullName ||
        !gender ||
        !dob ||
        !bloodGroup ||
        !noPreviousDonation ||
        !emergencyNumber
      ) {
        return res.json({
          success: false,
          message: "Please Enter all the fields",
        });
      }
      const updatedDonor = {
        fullName: fullName,
        email: email,
        number: number,
        currentAddress: currentAddress,
        gender: gender,
        dob: dob,
        bloodGroup: bloodGroup,
        noPreviousDonation: noPreviousDonation,
        emergencyNumber: emergencyNumber,
        isAvailable: isAvailable,
      };
      await User.findByIdAndUpdate(id, updatedDonor);

      return res.status(200).json({
        success: true,
        message: "You Account has been successfully Updated ",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User Doesnot exists",
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  beAdonor,
  getAllUsers,
  getSingleUser,
  updateUser,
};
