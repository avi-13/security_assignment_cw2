const router = require("express").Router();

const reqForBBController = require("../controller/bb_controller/reqForBBController");

router.post("/add_request_bb", reqForBBController.addRequestsBB);

router.get("/all_requests_bb", reqForBBController.getAllRequestBB);

router.delete("/delete_request_bb/:id", reqForBBController.deleteRequestBB);

router.get("/request_bb/:id", reqForBBController.getSingleRequestBB);

router.put("/update_request_bb/:id", reqForBBController.updateRequestBB);

router.get("/get_user_request/:id", reqForBBController.getRequestsofUser);

router.put("/update_status", reqForBBController.updateStatus);


module.exports = router;
