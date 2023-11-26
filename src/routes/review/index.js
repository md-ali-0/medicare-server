const findAll = require("../../api/reviews/findAll");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.get("/reviews", findAll);

module.exports = router;
