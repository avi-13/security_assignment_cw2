const router = require("express").Router();

const campaignController = require("../controller/bb_controller/campaignController");

router.post("/add_campaign", campaignController.addCampaign);

router.get("/get_all_campaign", campaignController.viewAllCampaigns);

router.delete("/delete_campaign/:id", campaignController.deleteCampaign);

router.get("/single_campaign/:id", campaignController.getSingleCampaign);

router.get("/campaign_by_bb/:id", campaignController.getCampaignByBB);

router.put("/update_campaign/:id", campaignController.updateCampaigns);

module.exports = router;
