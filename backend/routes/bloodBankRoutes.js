const router = require("express").Router();

const bloodBankController = require("../controller/admin_controller/bloodBankController");

router.post("/addbloodbank", bloodBankController.addBloodBanks);

router.delete("/deletebloodbank/:id", bloodBankController.deleteBloodBank);

router.put("/updatebloodbank/:id", bloodBankController.updateBloodBank);

router.get("/getallbloodbank", bloodBankController.getAllBloodBanks);

module.exports = router;
