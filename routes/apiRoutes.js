var express = require("express");
var articleController = require("../controllers/quotesController");
var router = new express.Router();

router.get("/saved", articleController.find);
router.post("/saved", articleController.save);
router.delete("/saved", articleController.destroy);

module.exports = router;