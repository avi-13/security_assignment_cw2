const router = require("express").Router();

const requestController = require("../controller/user_controller/addRequestController");

router.post("/add_request", requestController.addRequests);

router.get("/all_requests", requestController.getAllRequest);

router.delete("/delete_request/:id", requestController.deleteRequest);

router.get("/request/:id", requestController.getSingleRequest);

router.put("/update_request/:id", requestController.updateRequest);

router.put("/update_show_request", requestController.updateShowRequest);

module.exports = router;
