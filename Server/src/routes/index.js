const router = require("express").Router();
const getCharById = require("../controllers/getCharById");
const getCharByName = require("../controllers/getCharByName");
const getChars = require("../controllers/getChars");

router.get("/characters", getChars);
router.get("/character/:id", getCharById);
router.get("/character/name/:name", getCharByName);

module.exports = router;