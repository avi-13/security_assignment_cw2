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

const beAdonor = () => {
  const {gender, dob,bloodgroup, noPreviousDonation} = req.body;

}

module.exports = {
  createUser,
  loginUser,
};
