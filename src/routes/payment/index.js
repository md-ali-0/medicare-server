const addPayment = require("../../api/payment/addPayment");
const createIntent = require("../../api/payment/createIntent");
const router = require("express").Router();

router.post("/create-payment-intent", createIntent);
router.post("/create-payment", addPayment);

module.exports = router;
