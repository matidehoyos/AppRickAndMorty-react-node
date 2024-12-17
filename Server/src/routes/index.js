const router = require("express").Router();
const getById = require("../controllers/getById.js");
const getCharByName = require("../controllers/getCharByName.js");
const getChars = require("../controllers/getChars.js");

router.get("/characters", getChars);
router.get("/character/name/:name", getCharByName);
router.get("/character/:id", getById);

module.exports = router;