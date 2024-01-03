const addBloodBanks = () => {
  const { bName, bAddress, bContact, oHours, bgavailable, socialLinks } =
    req.body;

  if (
    !bName ||
    !bAddress ||
    !bContact ||
    !oHours ||
    !bgavailable ||
    !socialLinks ||
    !location
  ) {
    return res.json({
      success: false,
      message: "Please Enter all fields ",
    });
  }

  try {
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
