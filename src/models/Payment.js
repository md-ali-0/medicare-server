const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    campName: {
        type: String,
        require: true,
    },
    Fees: {
        type: Number,
        required: true,
    },
    scheduledDate: {
        type: String,
        required: true,
    },
    scheduledTime: {
        type: String,
        required: true,
    },
    venueLocation: {
        type: String,
        required: true,
    },
    PaymentStatus: {
        type: String,
        required: true,
    },
    ConfirmationStatus: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
});


const Payment = mongoose.model('payment', paymentSchema)

module.exports = Payment