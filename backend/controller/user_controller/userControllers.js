const User = require("../../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");
const nodemailer = require("nodemailer");
const RequestBlood = require("../../model/RequestBloodModel");
const sendEmail = async (to, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "markbase99@gmail.com",
      pass: "hwkh esmi mezr sesw",
    },
  });

  // Send mail with defined transport object
  let info = await transporter.sendMail({
    from: "merojagir0@gmail.com",
    to: to,
    subject: subject,
    text: text,
  });
};

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const { fullName, email, number, password, currentAddress } = req.body;
    // Check if req.files and req.files.bbImage exist
    // if (!req.files || !req.files.bbImage) {
    //   return res.json({
    //     success: false,
    //     message: "Please upload a valid image",
    //   });
    // }
    const { userImage } = req.files;
    if (userImage) {
      // Validate image size
      if (userImage.size > 10485760) {
        return res.json({
          success: false,
          message: "Image size too large. Maximum is 10 MB.",
        });
      }
      if ((!fullName && !email, !number && !password && !currentAddress)) {
        return res.json({
          success: false,
          message: "Please fill all the details",
        });
      }

      const uploadedImage = await cloudinary.v2.uploader.upload(
        userImage.path,
        {
          folder: "Users",
          crop: "scale",
        }
      );

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
        userImageURL: uploadedImage.secure_url,
      });

      await newUser.save();

      return res.status(201).json({
        success: true,
        message: "Your account has been created with Image",
      });
    } else {
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

      return res.status(201).json({
        success: true,
        message: "Your account has been created without Image",
      });
    }
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
    res.status(500).json("Server Error \n Please try again");
  }
};

const beAdonor = async (req, res) => {
  const { gender, dob, bloodGroup, noPreviousDonation, emergencyNumber } =
    req.body;
  // console.log(gender, dob, bloodGroup, noPreviousDonation, emergencyNumber);

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
      message: "Please provide all the required ",
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
      message: "Success",
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
    // console.log(user.isADonor);
    const { userImage } = req.files;
    // console.log(userImage);
    if (userImage) {
      const uploadedImage = await cloudinary.v2.uploader.upload(
        userImage.path,
        {
          folder: "Users",
          crop: "scale",
        }
      );

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
          userImageURL: uploadedImage.secure_url,
        };
        await User.findByIdAndUpdate(id, updatedUser);

        return res.status(200).json({
          success: true,
          message: "You have been register as a donor",
          updateUser: updatedUser,
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
          userImageURL: uploadedImage.secure_url,
        };
        await User.findByIdAndUpdate(id, updatedDonor);

        return res.status(200).json({
          success: true,
          message: "You Account has been successfully Updated ",
          updateUser: updatedDonor,
        });
      }
    } else {
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
          updateUser: updatedUser,
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
          message: "You Account has been successfully Updated without image",
          updateUser: updatedDonor,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User Doesnot exists",
    });
  }
};

const updateUserWithoutImage = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    // console.log(user.isADonor);
    console.log(req.body);

    if (user.isADonor == false) {
      const { fullName, email, number, currentAddress } = req.body;

      if (!fullName || !email || !number || !currentAddress) {
        return res.status(404).json({
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
        userData: updatedUser,
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
        return res.status(404).json({
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

      return res.status(201).json({
        success: true,
        message: "You Account has been successfully Updated",
        updateUser: updatedDonor,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  // console.log(req.body);

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const generatedPassword = Math.random().toString(36).slice(-6);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(generatedPassword, salt);
    await user.save();

    const emailSubject = "Password Reset";
    const emailText = `Your new password is: ${generatedPassword}`;

    await sendEmail(email, emailSubject, emailText);

    res.json({
      success: true,
      message: "New password sent to your email for password reset",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const searchUsers = async (req, res) => {
  try {
    const { district, bloodGroup } = req.query;
    const query = {};
    if (district) {
      query.currentAddress = { $regex: district, $options: "i" };
    }
    if (bloodGroup) {
      query.bloodGroup = bloodGroup;
    }
    const users = await User.find(query);
    res.json({
      success: true,
      users: users,
      message: "success",
    });
  } catch (error) {
    console.error("Error searching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getRequestsByUserId = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const userRequests = await RequestBlood.find({ userId: id }).sort({
      createdAt: -1,
    });

    console.log(userRequests);

    if (!userRequests || userRequests.length === 0) {
      return res.json({
        success: false,
        message: "No requests found for this user",
      });
    }

    res.status(200).json({
      success: true,
      userRequests: userRequests,
      message: "Requests found successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
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
  updateUserWithoutImage,
  forgetPassword,
  searchUsers,
  getRequestsByUserId,
};
