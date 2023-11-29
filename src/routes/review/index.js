const addReview = require("../../api/reviews/addReview");
const findAll = require("../../api/reviews/findAll");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.get("/reviews", findAll);
router.post("/add-review", verifyToken, addReview);

module.exports = router;
