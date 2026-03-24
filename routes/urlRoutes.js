const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");

router.route("/").post(urlController.createUrl);
router.route("/:code").get(urlController.redirection);

module.exports = router;
