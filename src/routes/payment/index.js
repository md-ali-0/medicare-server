const addPayment = require("../../api/payment/addPayment");
const createIntent = require("../../api/payment/createIntent");
const findAll = require("../../api/payment/findAll");
const verifyToken = require('../../middlewares/verifyToken')
const verifyAdmin = require('../../middlewares/verifyAdmin')
const verifyOrganizer = require('../../middlewares/verifyOrganizer')
const verifyProfessional = require('../../middlewares/verifyProfessional')

const router = require("express").Router();

router.post("/create-payment-intent", verifyToken, createIntent);
router.post("/create-payment", verifyToken, addPayment);
router.get("/payments", verifyToken, findAll);

module.exports = router;
