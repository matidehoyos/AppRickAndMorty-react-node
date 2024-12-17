const router = require("express").Router();
const getCharByName = require("../controllers/getCharByName.js");
const getChars = require("../controllers/getChars.js");

router.get("/characters", getChars);
router.get("/character/name/:name", getCharByName);

module.exports = router;