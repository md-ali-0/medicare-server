const getSettings = require("../../api/setting/getSettings");
const updateSettings = require("../../api/setting/updateSettings");
const verifyToken = require("../../middlewares/verifyToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");

const router = require("express").Router();

router.get("/get-settings", getSettings);
router.put("/update-settings", verifyToken, verifyAdmin, updateSettings);

module.exports = router;
