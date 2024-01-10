const router = require("express").Router();

const hospitalController = require("../controller/admin_controller/hospitalController");

router.post("/addhospital", hospitalController.addHospitals);

router.get("/getallhospitals", hospitalController.getAllHospitals);

router.delete("/deletehospital/:id", hospitalController.deleteHospital);

router.put("/updatehospital/:id", hospitalController.updateHospital);

module.exports = router;
