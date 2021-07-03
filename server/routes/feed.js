const express = require('express');
const router = express.Router();
const infoController = require("../controllers/info.controller");
router.post("/addMail",infoController.addInfo);

router.post("/addFeed",infoController.addFeedbackData);

module.exports=router;