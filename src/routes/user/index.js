const createUser = require("../../api/user/createUser");
const verifyUser = require("../../api/user/verifyUser");
const findAll = require("../../api/user/findAll");
const updateUser = require("../../api/user/updateUser");
const router = require("express").Router();
const verifyToken = require("../../middlewares/verifyToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");

router.post("/add-user", createUser);
router.get("/verify-user/:email", verifyUser);
router.get("/get-users/", verifyToken, findAll);
router.put("/update-user/:userId", verifyToken, verifyAdmin, updateUser);

module.exports = router;
