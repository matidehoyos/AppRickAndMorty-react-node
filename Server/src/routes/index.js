const router = require("express").Router();
const getCharById = require("../controllers/getCharById.js");
const getCharByName = require("../controllers/getCharByName.js");
const getChars = require("../controllers/getChars.js");

router.get("/characters", getChars);
router.get("/character/:id", getCharById);
router.get("/character/name/:name", getCharByName);

module.exports = router;